export const DeleteComment = (props) => {
  const deleteComment = async () => {
    try {
      let postComment = await fetch(process.env.REACT_APP_BASEURL + props.cId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_AUTHTOKEN,
        },
      });
      postComment.ok !== false ? alert("Ho rimosso il tuo comment!") : alert("Qualcosa è andato storto!");
      props.update();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <span onClick={deleteComment}>❌</span>
    </>
  );
};
