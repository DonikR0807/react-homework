import { useDispatch } from "react-redux";
import { Button } from "src/shared/ui";
import { userLoggedOut } from "../../model/userSlice";

export const LogoutBtn = ({ onLogout }: { onLogout: () => void }) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(userLoggedOut());
    localStorage.removeItem("token");
    onLogout();
  }

  return (
    <Button variant="outlined" onClick={() => handleLogout()}>
      Выйти
    </Button>
  );
};
