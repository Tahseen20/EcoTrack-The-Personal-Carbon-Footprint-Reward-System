import { useNavigate } from "react-router-dom";
function Signup(){
  const navigate = useNavigate();
  return (
    <div className="relative w-[1540px] h-[1024px] bg-[rgba(74,123,36,0.71)]">

      {/* Rectangle 1 */}
      <div className="absolute w-[1174px] h-[804px] left-[153px] top-[118px] bg-[#DFF7D0] opacity-75 border border-[#3F6A0A] rounded-[40px] shadow-md"></div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="absolute w-[235px] h-[157px] left-[525px] top-[135px]"
      />
      {/* SignUP */}
      <p className="absolute w-[235px] h-[60px] left-[682px] top-[160px] text-[48px] leading-[95px] font-bold text-[#22611D]">
        Sign Up
      </p>
{/* First Name Box */}
      <div className="absolute w-[437px] h-[63px] left-[323px] top-[274px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      {/* Last Name Box */}
      <div className="absolute w-[437px] h-[63px] left-[801px] top-[274px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      {/* First Name Text */}
      <p className="absolute left-[348px] top-[287px] text-[24px]">
        First Name:
      </p>

      {/* Last Name Text */}
      <p className="absolute left-[823px] top-[292px] text-[24px]">
        Last Name:
      </p>

      {/* Age */}
      <div className="absolute w-[437px] h-[56px] left-[323px] top-[364px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[348px] top-[376px] text-[24px]">
        Age:
      </p>

      {/* Mobile */}
      <div className="absolute w-[437px] h-[63px] left-[801px] top-[360px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[823px] top-[376px] text-[24px]">
        Mobile Number:
      </p>

      {/* Email */}
      <div className="absolute w-[913px] h-[63px] left-[325px] top-[450px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[347px] top-[469px] text-[24px]">
        Email Id:
      </p>

      {/* Location */}
      <div className="absolute w-[915px] h-[63px] left-[323px] top-[543px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[347px] top-[558px] text-[24px]">
        Location:
      </p>

      {/* Password */}
      <div className="absolute w-[437px] h-[56px] left-[323px] top-[632px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[348px] top-[642px] text-[24px]">
        Password:
      </p>

      {/* Confirm Password */}
      <div className="absolute w-[437px] h-[56px] left-[801px] top-[632px] bg-[#F5F5F5]/50 rounded-[75px]"></div>

      <p className="absolute left-[823px] top-[642px] text-[24px]">
        Confirm Password:
      </p>

      {/* Checkbox */}
      <div className="absolute w-[27px] h-[27px] left-[348px] top-[713px] bg-[#DFF7D0]"></div>

      <p className="absolute left-[390px] top-[710px] text-[20px]">
        I agree to Terms & Conditions
      </p>

      {/* Button */}
      {/*<div className="absolute w-[268px] h-[67px] left-[606px] top-[768px] bg-[#3F6A0A]/50 rounded-[90px]"></div>*/}

      
      <p
  className="absolute left-[600px] top-[790px] text-[20px] cursor-pointer text-blue-600"
  onClick={() => navigate("/")}
>
  Already have an account? Login
</p>

    </div>
  );
};

export default Signup;