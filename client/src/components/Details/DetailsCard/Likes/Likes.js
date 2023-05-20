import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { likesServiceFactory } from "../../../../services/likesService";

export default function Likes(props) {
  const { isAuthenticated, recipe, userId } = props;
  const { token } = useContext(AuthContext);

  const likeService = likesServiceFactory(token);
  const [like, setLike] = useState(false);
  const [allLikes, setAllLikes] = useState([]);

  const onLike = async () => {
    const data = { recipeId: recipe._id, _ownerId: userId };

    let newLike = await likeService.create(data, token);

    setAllLikes((prevLikes) => [...prevLikes, newLike]);
  };

  const onDislike = async () => {
    const findUserLike = allLikes.find(
      (like) => like._ownerId === userId && like.recipeId === recipe._id
    );

    await likeService.del(findUserLike._id, token);
    setAllLikes((prevLikes) =>
      prevLikes.filter(
        (like) => like._ownerId !== userId && like.recipeId === recipe._id
      )
    );
  };

  const likeToggle = () => {
    setLike((state) => !state);
    like ? onLike() : onDislike();
  };

  useEffect(() => {
    // fetch data
    const showAllLikes = async () => {
      const foundLikes = await likeService.getAll(recipe._id);
      console.log(foundLikes);
      // set state when the data received
      setAllLikes(foundLikes);
    };

    showAllLikes();
  }, [setAllLikes]);

  useEffect(() => {
    const didUserLike = () => {
      const liked = allLikes.find((like) => like._ownerId === userId);
      if (liked) {
        setLike(false);
        return false;
      } else {
        setLike(true);
        return true;
      }
    };
    didUserLike();
  }, [allLikes]);

  return (
    <>
      <p>{allLikes.length}</p>
      {isAuthenticated && (
        <div onClick={() => likeToggle()}>
          {like ? (
            <img
              src="/assets/images/icons/not-liked.png"
              style={styles.likeIcon}
              alt="Like"
            />
          ) : (
            <img
              src="/assets/images/icons/liked.png"
              style={styles.likeIcon}
              alt="Unlike"
            />
          )}
        </div>
      )}
    </>
  );
}

const styles = {
  likeButton: {
    width: "2rem",
    backgroundColor: "none",
  },
  likeIcon: {
    width: "2rem",
  },
};
