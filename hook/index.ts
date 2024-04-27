import { useQuery, useMutation } from "react-query";
import {login} from '@/pages/api/_index';

export const useLogin = () => {
    return useMutation((credentials: { username: string, password: string }) => login(credentials.username, credentials.password));
  };
