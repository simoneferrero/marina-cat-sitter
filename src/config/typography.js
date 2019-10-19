import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.headerFontFamily = ['Chia', 'serif']
bootstrapTheme.bodyFontFamily = ['Roboto', 'sans-serif']
bootstrapTheme.baseFontSize = '24px'
const typography = new Typography(bootstrapTheme)

export default typography
