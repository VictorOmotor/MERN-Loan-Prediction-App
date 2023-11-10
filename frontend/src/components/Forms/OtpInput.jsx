import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const OtpInput = ({ value, onChange, error }) => {
  return (
    <div>
      <div>
        <OTPInput
          value={value}
          onChange={onChange}
          numInputs={4}
          isInputNum={true}
          shouldAutoFocus={true}
          renderSeparator={<span className="mx-auto" />}
          containerStyle="border bg-[#DFDEDE] flex justify-center"
          inputStyle={`p-2 text-3xl border ${
            error ? 'border-red-500' : 'border-[#169872]'
          } rounded focus:outline-none text-center`}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </div>
  );
};

export default OtpInput;
