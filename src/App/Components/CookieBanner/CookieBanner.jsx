import { useState } from 'react';
import './styles.css';

export const CookieBanner = () => {
  function getCookieState() {
    return localStorage.getItem('cookieState');
  }

  const [cookieState, setCookieState] = useState(getCookieState());

  function updateCookieState() {
    localStorage.setItem('cookieState', 1);
    setCookieState(getCookieState());
  }

  if (cookieState) {
    return <></>;
  }

  return (
    <div className="cookies-banner-container">
      <div className="cookies-banner">
        <div>
          <h5>Pozwól na pliki cookies</h5>
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować
          </p>
        </div>
        <div className="accept-cookies" onClick={updateCookieState}>
          W porządku
        </div>
      </div>
    </div>
  );
};
