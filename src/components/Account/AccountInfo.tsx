import React, { Fragment, useEffect, useState } from "react";
import { useContext, useRef } from 'react'
import { AuthContext } from "../../Context/AuthProvider";
import { useForm, Controller } from 'react-hook-form'
import { SelectReact, ParamsForm, BuildOptionsSelect } from '../UI/Form/Form'
import { ErrorsMessage } from "../UI/Form/ErrorsMessage";
import { GetAxios, PatchAxios, PutAxios } from "../../Fetch/Fetching"
import { useSelector } from "react-redux";
import { AlertDefault } from "../UI/Alerts/Alerts";
import AccountOut from "../UI/Account/AccountOut";
import { useWindowSize } from '../../hook/useWindowSize'
import { useTypeSelector } from "../../hook/useTypeSelector";
import { IUser } from "../../Types/user-server";
import { OptionSelect } from "../../Types/products-server";



function AccountInfo() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()


   const user = useTypeSelector<IUser | null>(state => state.user.user)
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
      setValue
   } = useForm({
      mode: "onChange"
   })


   const { singIn } = useContext(AuthContext)
   const [alert, setAlert] = useState<boolean | string>(false)

   async function handlerSubmit(data: any) {
      console.log(data);
      data.id = user?.id
      try {
         const resp = await PatchAxios(`userCard/${user?.id}`, data)
         singIn(data, function () { console.log(data) })
         setAlert('Ваши данные успешно изменены')
      }
      catch {
         setAlert("Что-то пошло не так")
      }
   }


   useEffect(() => {
      if (user) {
         setValue('email', user.email, { shouldValidate: true })
         setValue('firstName', user.firstName, { shouldValidate: true })
         setValue('lastName', user.lastName, { shouldValidate: true })
         setValue('password', user.password, { shouldValidate: true })
         setValue('address.country', user.address.country, { shouldValidate: true })
         setValue('address.city', user.address.city, { shouldValidate: true })
         setValue('address.street', user.address.street, { shouldValidate: true })
         setValue('address.house', user.address.house, { shouldValidate: true })
      }
   }, [user])

   const formInputs = [
      {
         title: "Адресс Электронной почты",
         regist: "email"
      },
      {
         title: "Имя",
         regist: "firstName",
      },
      {
         title: "Фамилия",
         regist: "lastName",
      },
      {
         title: "Пароль",
         regist: "password",
      },
      {
         title: "Страна",
         regist: "address.country",
         registArray: ['address', 'country']
      },
      {
         title: "Город",
         regist: "address.city",
         registArray: ['address', 'city']
      },
      {
         title: "Улица",
         regist: "address.street",
         registArray: ['address', 'street']
      },
      {
         title: "Дом",
         regist: "address.house",
         registArray: ["address", "house"]
      }
   ]
   const label = useRef<HTMLLabelElement | null>(null)
   // width: label.current.getBoundingClientRect().width
   // BuildOptions for Select
   const [options, setOptions] = useState<OptionSelect[] | any[]>([])
   useEffect(() => {
      const func = async () => {
         const option = await BuildOptionsSelect("country")
         setOptions(option)
      }
      func()
   }, [])

   return (
      <Fragment>
         {minBigAcc && <AccountOut />}
         {alert && <AlertDefault state={alert} setState={setAlert} />}
         <div className="cab__info">
            <div className="cab__info-icon">
               <img src="/img/page-icon/resume.png" alt="info" />
            </div>
            <div className="cab__info-title">
               <h1>МОЯ ИНФОРМАЦИЯ</h1>
               <aside>Вы в любой момент можете обновить вашу учетную запись и внести любые изменения в
                  приведенные ниже данные.</aside>
            </div>
            <div className="cab__info-form">
               <form onSubmit={handleSubmit(handlerSubmit)} className="reg__form" id="cab__info-form" action="">
                  {formInputs.map((item) => {
                     let registQuery: string | string[] = ''
                     let checkInput = true
                     if (item.registArray) {
                        registQuery = item.registArray
                        if (item.registArray[1] == "country") checkInput = false
                     }
                     else if (!item.registArray) {
                        registQuery = item.regist
                     }
                     return (
                        <> {checkInput ?
                           <label ref={label} className="reg__label">{item.title}:
                              <input id={item.regist} type="text" className="reg__input"
                                 {...register(item.regist, ParamsForm(item.regist))} />
                              <ErrorsMessage errors={errors} regist={registQuery} />
                           </label>
                           :
                           <label style={{}} className="reg__label"> {item.title}:
                              <Controller control={control} name={item.regist} rules={ParamsForm(item.regist)}
                                 render={({ field: { onChange, value }, fieldState: { error } }) =>
                                    <SelectReact onChange={onChange} value={value} error={error} options={options} />
                                 } />
                           </label>
                        }
                        </>
                     )
                  })}
                  <input className="reg__btn" id="cab__btn" type="submit" value="Сохранить Изменения" />
               </form>
            </div>
         </div >
      </Fragment>

   )
}
export default AccountInfo