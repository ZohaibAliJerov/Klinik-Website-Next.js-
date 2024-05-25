import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CiHospital1 } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ServiceCard = ({ icon, header, body }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="p-7 my-1"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
      style={{
        margin: "0 auto",
        width: "auto",
      }}
    >
      <StyledCard className=" p-7 my-1" fullWidth>
        <CardHeader className="flex flex-col justify-center items-center">
          {icon}
          <StyledHeading>{header}</StyledHeading>
        </CardHeader>
        <CardBody className="text-center">
          <p>{body}</p>
        </CardBody>
        <CardFooter className="flex justify-center pt-8">
          <StyledButton>Learn More</StyledButton>
        </CardFooter>
      </StyledCard>
    </motion.div>
  );
};

const ServicesCard = () => {
  const [showAll, setShowAll] = useState(false);
  const cardsData = [
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
    {
      icon: <CiHospital1 size={80} />,
      header: "Services Overview 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut velit dolorem dignissimos et neque id cupiditate aspernatur obcaecati",
    },
  ];

  const handleToggleCards = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <ServicesGrid>
        {showAll
          ? cardsData.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                header={card.header}
                body={card.body}
              />
            ))
          : cardsData
              .slice(0, 6)
              .map((card, index) => (
                <ServiceCard
                  key={index}
                  icon={card.icon}
                  header={card.header}
                  body={card.body}
                />
              ))}
      </ServicesGrid>
      <div className="flex justify-center pt-8">
        <StyledLoadMoreButton className="" onClick={handleToggleCards}>
          {showAll ? "Show Less" : "More Services"}
        </StyledLoadMoreButton>
      </div>
    </div>
  );
};

export default ServicesCard;

const StyledWrapper = styled.div`
  background-color: red;
  width: calc() 90%;
`;
const StyledHeading = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

const StyledCard = styled(Card)`
  background-color: #f4f8ff;
`;

const StyledButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  border: 2px solid #003366;
  color: #003366;
  background-color: transparent;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(230px, 1fr));
  }
`;
const StyledLoadMoreButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: #007bff;
  color: white;
  font-weight: 600;
`;
