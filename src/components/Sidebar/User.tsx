import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import StyledProfile from "pages/User/style";
import { logOut } from "store/reducers/AuthSlice";
import { logoutIcon, setttingsIcon } from "assets";
import { useAppDispatch, useAppSelector } from "hooks";

export const User = () => {
  const user = useAppSelector(({ auth }) => auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logOutUser = () => {
    if (confirm("Rostan ham tizimdan chiqmoqchimisiz?")) {
      dispatch(logOut());
      navigate("/");
    }
  };
  return (
    <StyledProfile>
      <div className="profile__user">
        <div className="user__avatar">
          <Avatar
            className="avatar__img"
            src="https://api.dicebear.com/7.x/fun-emoji/svg?eyes=closed&mouth=lilSmile"
            size={{ xs: 24, sm: 32, md: 40, lg: 60, xl: 70, xxl: 80 }}
          />
          <div>
            <div className="user__name">{user?.name}</div>
            <div className="info__detail">+{user?.phone}</div>
          </div>
        </div>

        <hr />
        <div className="user__ads">
          <button className="ad__btn">E'lon berish</button>
        </div>

        <hr />

        <div className="user__actions">
          <div
            className="action__wrp flex"
            role="button"
            tabIndex={0}
            onClick={logOutUser}
          >
            <img className="action__icon" src={logoutIcon} alt="logout icon" />
            <span>Chiqish</span>
          </div>
          <div className="action__wrp flex" role="button" tabIndex={0}>
            <img
              className="action__icon"
              src={setttingsIcon}
              alt="settings icon"
            />
            <span>Sozlamalar</span>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};