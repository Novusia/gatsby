import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
    const { lang } = headData;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nie istniejąca strona</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Page not found" />
            </Helmet>
            <section id="hero" className="jumbotron">
                <Container>
                    <Fade bottom duration={1000} delay={500} distance="30px">
                        <h1 className="hero-title text-center">
                            Warunki współpracy{' '}
                        </h1>
                        <p className="about-wrapper__info-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
                        </p>
                    </Fade>
                    <Fade bottom duration={1000} delay={1000} distance="30px">
                        <p className="hero-cta justify-content-center">
                            <Link className="cta-btn cta-btn--hero" to="/">
                                Wróć
              </Link>
                        </p>
                    </Fade>
                </Container>
            </section>


            <footer className="footer navbar-static-bottom">
                <Container>
                    <span className="back-to-top">
                        <Link to="hero" smooth duration={1000}>
                            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                        </Link>
                    </span>

                    <hr />
                    <p className="footer__text">
                        © {new Date().getFullYear()} - Template change by{' '}
                        <a href="http://undilo.com/" target="_blank" rel="noopener noreferrer">
                            Marta Chrostowska
          </a>
                    </p>

                </Container>
            </footer>


        </>
    );
};

