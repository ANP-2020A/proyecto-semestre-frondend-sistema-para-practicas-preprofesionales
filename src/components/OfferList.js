import React, { useEffect, useState } from "react";
import { Skeleton, Card, Col, Row, Radio, Typography, Button } from "antd";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";
import { useOfferList } from "../data/useOfferList";
import ShowError from "./ShowError";

const { Text } = Typography;

const OfferList = (props) => {
  const { offers, isLoading, isError, mutate } = useOfferList();
  // const [ articles, setArticles ] = useState( props.articles );

  useEffect(() => {
    //   console.log( 'props.articles', props.articles );
    //   setArticles( props.articles );
    console.log(props.offers);
  }, []);

  const handleChangeCategory = (e) => {
    // setArticles( props.articles.filter( ( article ) => e.target.value === 'all' || article.category_data.id ===
    // e.target.value ) );
  };

  if (isLoading) {
    return (
      <Row justify="center" gutter={30}>
        {[...new Array(9)].map((_, i) => (
          <Col xs={24} sm={12} md={8} style={{ marginBottom: 30 }} key={i}>
            <div style={{ textAlign: "center" }}>
              <Skeleton.Image style={{ width: 200 }} />
              <Card title="" extra="" cover="" loading />
            </div>
          </Col>
        ))}
      </Row>
    );
  }

  if (isError) {
    return <ShowError error={isError} />;
  }

  return (
    <>
      {props.categories && (
        <Row justify="center">
          <Col>
            <Radio.Group
              defaultValue="all"
              buttonStyle="solid"
              onChange={handleChangeCategory}
            >
              <Radio.Button value="all">Todas</Radio.Button> )
              {props.categories.map((category, index) => (
                <Radio.Button value={category.id} key={index}>
                  {category.name}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Col>
        </Row>
      )}
      <Row justify="center" gutter={30}>
        {offers.map((offer, i) => (
          <Col xs={24} sm={12} md={8} style={{ marginBottom: 30 }} key={i}>
            {offer.name ? (
              <Card
                title={offer.name}
                extra={
                  <Link to={Routes.ARTICLE_ID.replace(":id", offer.id)}>
                    Más
                  </Link>
                }
                cover={
                  <img
                    alt={offer.title}
                    src={`http://localhost:8000/storage/${offer.image}`}
                  />
                }
              >
                <Text type="secondary">{offer.created_at}</Text>
                <p> {offer.description}</p>
              </Card>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Skeleton.Image style={{ width: 200 }} />
                <Card title="" extra="" cover="" loading />
              </div>
            )}
          </Col>
        ))}
      </Row>
    </>
  );
};
export default OfferList;
