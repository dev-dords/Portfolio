import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/rocket.png';
import { useState, useEffect } from 'react';
export const Banner = () => {
  const toRotate = [
    'Software Engineer',
    'Web Developer',
    'AEM Developer',
    'MERN-Stack Developer',
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I am Joshua Renzo,\n `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Laboris mollit magna duis labore tempor. Dolore velit eiusmod
              pariatur minim cupidatat veniam deserunt ea fugiat amet tempor.
              Aute sint et magna pariatur occaecat esse sunt cillum excepteur
              nulla cupidatat ea exercitation ex. Labore nisi mollit labore
              excepteur duis tempor est nisi eiusmod id nisi irure elit quis. Ut
              laboris mollit ex consequat voluptate Lorem nulla esse consectetur
              aliqua ipsum. Velit magna ipsum ex in. Officia sit in ipsum
              officia fugiat elit voluptate.
            </p>
            <button onClick={() => console.log('connect')}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
