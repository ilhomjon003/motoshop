/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { useEffect, useState, type MouseEvent } from "react";
import { FiEye, FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import CardStyle from "./style";
import { formatNumbers, getFormattedLink } from "utils";
import { IAdMoto } from "interfaces/responses";
import { useAppSelector } from "hooks";
import { useDeleteAdMutation, useToggleLikeAdMutation } from "services/ad";
import { Text } from "components/Text";
import { routes } from "constants/routes";
import LazyImage from "components/LazyImage";

const { ADS, AUTH } = routes;
interface ICard extends IAdMoto {
  hasDelete?: boolean;
}
const Card = (props: ICard) => {
  const {
    _id,
    price,
    title,
    location,
    images,
    postedAt,
    views,
    likes,
    hasDelete,
} = props;
  const date = moment(postedAt).format("HH:MM L");
  const navigate = useNavigate();
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [isAdLiked, setisAdLiked] = useState<boolean>(() =>
    likes.likedUsers.includes(userId!)
  );
  const [toggleLikeAd, { data, error }] = useToggleLikeAdMutation();
  const [deleteAd, { data: deleteData, error: deleteErr }] =
    useDeleteAdMutation();

  useEffect(() => {
    checkAdLiked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (error) console.log(error);
    if (deleteErr) console.log(deleteErr);
  }, [error, deleteErr]);

  function checkAdLiked() {
    if (likes.likedUsers.includes(userId!)) {
      setisAdLiked(true);
    } else {
      setisAdLiked(() => false);
    }
  }
  const handleLikeAd = (id: string, e: MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    if (!userId) {
      navigate(AUTH);
    } else {
      toggleLikeAd({ userId, adId: id });
    }
  };
  function handleDeleteAd(e: MouseEvent<any>) {
    // e.stopPropagation();
    e.preventDefault();
    if (confirm("Rostdan ham ushbu e'lonni  o'chirmoqchimisiz?")) {
      deleteAd(_id);
    }
  }

  useEffect(() => {
    if (deleteData) console.log(deleteData);
  }, [deleteData]);

  return (
    <CardStyle>
      <Link to={`${ADS}/${getFormattedLink(title + location)}?id=${_id}`}>
        <div className="img__wrp">
          <LazyImage className="card__img" src={images[0]} alt={title} />
          <div className="icons">
            <div className="icon__wrp">
              {isAdLiked ? (
                <IoMdHeart
                  className="heart__icon icon"
                  onClick={(e: any) => handleLikeAd(_id, e)}
                />
              ) : (
                <IoMdHeartEmpty
                  className="heart__icon icon"
                  onClick={(e: any) => handleLikeAd(_id, e)}
                />
              )}
            </div>

            {hasDelete && (
              <div
                className="icon__wrp"
                onClick={(e: MouseEvent<any>) => handleDeleteAd(e)}
              >
                <FiTrash className="delete__icon icon" />
              </div>
            )}
          </div>
        </div>
        <div className="card__content">
          <Text className="head__text" size="sm" bold={400}>
            {location}
          </Text>
          <div className="card__row">
            <Text size="lg" bold={600}>
              {price.currency === "usd"
                ? `$${formatNumbers(parseInt(price.amount))}`
                : price.currency === "uzs"
                ? `${formatNumbers(parseInt(price.amount))} so'm`
                : `€${formatNumbers(parseInt(price.amount))}`}
            </Text>
          </div>
          <Text className="card__head" size="md" bold={600}>
            {title}
          </Text>
          <div className="card__row">
            <small>{date}</small>

            <small>
              {views}
              <FiEye className="views__icon" />
            </small>
          </div>
        </div>
      </Link>
    </CardStyle>
  );
};

export default Card;
