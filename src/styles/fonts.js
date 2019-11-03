import { css } from 'styled-components/macro'

import Chia_Bold from '../fonts/Chia-Bold.otf'
import Chia_Italic from '../fonts/Chia-Italic.otf'
import Chia_Light from '../fonts/Chia-Light.otf'
import Chia_Medium from '../fonts/Chia-Medium.otf'
import Chia_Regular from '../fonts/Chia-Regular.otf'
import Montserrat_Black from '../fonts/Montserrat-Black.ttf'
import Roboto_Black from '../fonts/Roboto-Black.ttf'
import Roboto_BlackItalic from '../fonts/Roboto-BlackItalic.ttf'
import Roboto_Bold from '../fonts/Roboto-Bold.ttf'
import Roboto_BoldItalic from '../fonts/Roboto-BoldItalic.ttf'
import Roboto_Italic from '../fonts/Roboto-Italic.ttf'
import Roboto_Light from '../fonts/Roboto-Light.ttf'
import Roboto_LightItalic from '../fonts/Roboto-LightItalic.ttf'
import Roboto_Medium from '../fonts/Roboto-Medium.ttf'
import Roboto_MediumItalic from '../fonts/Roboto-MediumItalic.ttf'
import Roboto_Regular from '../fonts/Roboto-Regular.ttf'
import Roboto_Thin from '../fonts/Roboto-Thin.ttf'
import Roboto_ThinItalic from '../fonts/Roboto-ThinItalic.ttf'

const CHIA = 'Chia'
const MONTSERRAT = 'Montserrat'
const ROBOTO = 'Roboto'

const BLACK = 'black'
const BOLD = 'bold'
const ITALIC = 'italic'
const LIGHT = 'light'
const MEDIUM = 'medium'
const NORMAL = 'normal'
const THIN = 'thin'

const fontFaces = css`
	@font-face {
		font-family: "${CHIA}";
		src: url("${Chia_Bold}");
		font-weight: ${BOLD};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${CHIA}";
		src: url("${Chia_Italic}");
		font-weight: ${NORMAL};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${CHIA}";
		src: url("${Chia_Light}");
		font-weight: ${NORMAL};
		font-style: ${LIGHT};
	}

	@font-face {
		font-family: "${CHIA}";
		src: url("${Chia_Medium}");
		font-weight: ${MEDIUM};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${CHIA}";
		src: url("${Chia_Regular}");
		font-weight: ${NORMAL};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${MONTSERRAT}";
		src: url("${Montserrat_Black}");
		font-weight: ${BLACK};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Black}");
		font-weight: ${BLACK};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_BlackItalic}");
		font-weight: ${BLACK};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Bold}");
		font-weight: ${BOLD};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_BoldItalic}");
		font-weight: ${BOLD};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Italic}");
		font-weight: ${NORMAL};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Light}");
		font-weight: ${LIGHT};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_LightItalic}");
		font-weight: ${LIGHT};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Medium}");
		font-weight: ${MEDIUM};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_MediumItalic}");
		font-weight: ${MEDIUM};
		font-style: ${ITALIC};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Regular}");
		font-weight: ${NORMAL};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_Thin}");
		font-weight: ${THIN};
		font-style: ${NORMAL};
	}

	@font-face {
		font-family: "${ROBOTO}";
		src: url("${Roboto_ThinItalic}");
		font-weight: ${THIN};
		font-style: ${ITALIC};
	}
`

export default fontFaces
