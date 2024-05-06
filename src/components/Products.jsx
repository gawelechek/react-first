import { Card } from "./Card";
import Image from '../assets/images/c1.jpg'
// картинки можем импортировать через импорт, по обычной ссылке в src не получится

export const Products = () => {
  return (
    <section className="products">
      <div className="container grid">
        <Card
          imageLink={
            Image
            // можно вот так вставлять
          }
          price={"250$"}
        />
        {/* и здесь как в js, передаем аргументом нашу ссылку (вообще что угодно может быть) */}
        <Card
          imageLink={
            "https://designnews.ru/images/designnews/balenciaga/muddy_3XL_balenciaga_02_designnews_ru.jpg"
          }
          price={"100$"}
        />
        <Card
          imageLink={
            "https://balenciaga.dam.kering.com/m/51ff324dbe9072e8/Medium-790201TQS164210_G.jpg?v=1"
          }
          price={"1020$"}
        />
        <Card
          imageLink={
            "https://balenciaga.dam.kering.com/m/4666dad6b85e5f1a/Medium-7886072AA4M1000_G.jpg?v=1"
          }
          price={"1000$"}
        />
        <Card
          imageLink={
            "https://balenciaga.dam.kering.com/m/7d0c097c18dc11b0/Medium-786643TQW556379_G.jpg?v=1"
          }
          price={"7090$"}
        />
        <Card
          imageLink={
            "https://balenciaga.dam.kering.com/m/1133648f7508599f/Medium-7977892AA9S1000_G.jpg?v=1"
          }
          price={"500$"}
        />
        <Card
          imageLink={
            "https://balenciaga.dam.kering.com/m/51db11abab9f75ca/Medium-792779W2MV29110_F.jpg?v=4"
          }
          price={"920$"}
        />
        <Card
          imageLink={
            "https://static.cdek.shopping/images/shopping/lzMxRCoSPVrMVSD9.webp"
          }
          price={"3700$"}
        />
      </div>
    </section>
  );
};
