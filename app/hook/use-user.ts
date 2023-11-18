import { useQuery } from "@tanstack/react-query";
import { UserType } from "@/type/user";

let USER: UserType | null = null;
const useUser = () => {
  const { data: user, refetch } = useQuery({
    queryKey: [`user`],
    queryFn: () => USER,
  });

  const setUser = (newUser: UserType) => {
    USER = newUser;
    refetch();
  };

  const resetUser = () => {
    USER = null;
    refetch();
  };

  return { user, setUser, resetUser };
};

export default useUser;
