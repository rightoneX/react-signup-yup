import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "./SubmitButton";
import Const from "../Constants.js";
import Validation from "../utilities/inputValidation.js"


const schema = yup.object().shape({
  email: yup
    .string()
    .email(Const.EMAIL_ERROR)
    .required(Const.REQUIRED),
  password: yup
    .string()
    .matches(Validation.passwordRules, { message: Const.PASSWORD_ERROR })
    .required(Const.REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], Const.CONFIRM_PASSWORD_ERROR)
    .required(Const.REQUIRED),
});


export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{Const.FORM_SIGN_UP_TITLE}</h2>

      <div className='entry-filed'>
        <input
          placeholder={Const.EMAIL_PLACEHOLDER}
          {...register("email")}
        />
        <div className='error'>{errors.email?.message}</div>
      </div>


      <div className='entry-filed'>
        <input
          type="password"
          placeholder={Const.PASSWORD_PLACEHOLDER}
          {...register("password")}
        />
        <div className='error'>{errors.password?.message}</div>
      </div>


      <div className='entry-filed'>
        <input
          type="password"
          placeholder={Const.CONFIRM_PASSWORD_PLACEHOLDER}
          {...register("confirmPassword")}
        />
        <div className='error'>{errors.confirmPassword?.message}</div>
      </div>

      <SubmitButton
        type="submit"
        label={Const.CREATE_ACCOUNT_BUTTON}
      />

    </form>
  )
}