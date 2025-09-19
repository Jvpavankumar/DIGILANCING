import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const verifyReferral = createAsyncThunk(
  "register/verifyReferral",
  async (referral, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/users/verifyreferral/${referral}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid referral code");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const registerAndPay = createAsyncThunk(
  "register/registerAndPay",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/users/register-and-pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  step: 1,
  referral: "",
  referralVerified: false,
  selectedCard: null,
  packages: [],
  defaultPackages: [],
  formData: {
    full_name: "",
    state: "",
    phone: "",
    email: "",
    confirmEmail: "",
    password: "",
  },
  paymentData: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setReferral: (state, action) => {
      state.referral = action.payload;
      state.referralVerified = false;
      state.packages = state.defaultPackages;
    },
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setDefaultPackages: (state, action) => {
      state.defaultPackages = action.payload;
      state.packages = action.payload;
    },
    resetRegister: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyReferral.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyReferral.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPackages = state.defaultPackages.map((pkg) => {
          const matched = action.payload.data.find(
            (p) => p.package_id === pkg.id
          );
          if (matched) {
            const amountNumber = Number(matched.referral_amount);
            const formattedPrice = amountNumber.toLocaleString("en-IN", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });
            return { ...pkg, price: formattedPrice };
          }
          return pkg;
        });
        state.packages = updatedPackages;
        state.referralVerified = true;
      })
      .addCase(verifyReferral.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.referralVerified = false;
        state.packages = state.defaultPackages;
      })
      .addCase(registerAndPay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAndPay.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentData = action.payload;
        state.step = 3;
      })
      .addCase(registerAndPay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setStep,
  setReferral,
  setSelectedCard,
  setFormData,
  setDefaultPackages,
  resetRegister,
} = registerSlice.actions;

export default registerSlice.reducer;
