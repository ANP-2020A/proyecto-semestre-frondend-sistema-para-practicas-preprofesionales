import React from "react";
import OfferList from "../components/OfferList";
import { useOfferList } from "../data/useOfferList";
import ShowError from "../components/ShowError";
import "../styles/slogan.css"
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import Routes from "../constants/routes";

const HomePage = () => {
  const offers = useOfferList();

  return (
    <>
        <div className="slogan-box">
            <Row>
                <Col span={24}>
                    <h1 className="page-title">
                        Obtener experiencia laboral no está tan lejos, la oportunidad está a tan solo un click de
                        distancia
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                    <Button type="primary" style={{
                        background:'#292F36',
                        color:'#ffffff',
                        borderColor:'#292F36',
                        marginTop:'50px',
                        marginBottom:'50px',

                    }} href={Routes.REGISTER}>Registrar</Button>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                </Col>


            </Row>


        </div>
        <div style={{
            background:'#ffffff',
            width:'39.45cm',
            marginLeft:'-123px',
            padding:'0'

        }}>

        </div>



    </>
  );
};

export default HomePage;
