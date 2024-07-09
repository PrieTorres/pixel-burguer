import { ReactElement } from "react";
import { Container } from "./styles";
import brasilFlag from "../../../assets/images/brasil.png";
import euaFlag from "../../../assets/images/eua.png";
import { useLanguageContext } from "../Contexts/LanguagueContext";

export const LanguagueSelect = (): ReactElement => {
  const { onClickLanguageChange } = useLanguageContext();
  const selectLanguagues = [
    { val: "pt", src: brasilFlag, text: "pt-br" },
    { val: "en", src: euaFlag, text: "en" },
  ];

  return (
    <Container onChange={(e) => onClickLanguageChange(e)}>
      {selectLanguagues?.map((languagueObj) =>
        <option
          key={`opt_${languagueObj.val}`}
          value={languagueObj.val}
          style={{
            width: 80,
            // height: 30,
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${languagueObj.src})`
          }}
        >
          {languagueObj.text /*<SafeImage src={languagueObj.src} text={languagueObj.text} />*/}
        </option>
      )}
    </Container>
  )
};