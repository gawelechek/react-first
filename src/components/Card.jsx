export const Card = ({ imageLink, price }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src={imageLink} alt="" />
        {/* props - будем вставлять кусок кода, а именно ссылку на фотку */}
      </div>
      <h4 className="card__title">Balenciaga repto sneackers</h4>
      <p className="price">{price}</p>
    </div>
  );
};
