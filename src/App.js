import  {Suspense,useState} from 'react';
import './App.css';
import Routes from "./Routes";
// import Navigation from "./Navigation";
import i18n from './i18n';
import Loading from "./Loading";
import LocaleContext from "./LocaleContext";

function App() {
    const [locale, setLocale] = useState(i18n.language);
    console.log('lll',locale)
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <div className="App">
        <LocaleContext.Provider value={{locale,setLocale}}>
        <Suspense fallback={<Loading/>}>
        {/*<Navigation/>*/}
      <Routes/>
        </Suspense>
        </LocaleContext.Provider>
    </div>
  );
}

export default App;
