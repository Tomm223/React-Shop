import { createSearchParams, generatePath, useNavigate } from "react-router-dom";




export const useNavigateParams = () => {
   const navigate = useNavigate();

   return (url, params) => {
      const path = generatePath(":url?:queryString", {
         url,
         queryString: createSearchParams(params).toString()
      });
      navigate(path);

   }
}

