import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import "./plans.css";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempore
        odit doloribus ea nostrum laborum placeat, nam distinctio error natus
        aspernatur expedita, vitae dicta temporibus optio sapiente cumque?
        Reprehenderit, fuga.
      </Header>
      <section className="plans">
        {plans.map(({ id, name, desc, price, features }) => {
          return (
            <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features.map(({ feature, available }, index) => {
                return (
                  <p key={index} className={!available ? "disabled" : ""}>
                    {feature}
                  </p>
                );
              })}

              <Link to="/payment" className="btn lg">
                Choose Plan
              </Link>
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default Plans;
