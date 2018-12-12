import logoReactSvg from '../images/logos/logo-react.svg';
import logoReduxSvg from '../images/logos/logo-redux.svg';
import logoAngularSvg from '../images/logos/logo-angular.svg';
import logoNodeSvg from '../images/logos/logo-node.svg';
import logoJquerySvg from '../images/logos/logo-jquery.svg';
import logoHtml5Svg from '../images/logos/logo-html5.svg';
import logoCss3Svg from '../images/logos/logo-css3.svg';
import logoSassSvg from '../images/logos/logo-sass.svg';
import logoWebpackSvg from '../images/logos/logo-webpack.svg';
import logoGruntSvg from '../images/logos/logo-grunt.svg';
import logoGitSvg from '../images/logos/logo-git.svg';
import logoLinuxSvg from '../images/logos/logo-linux.svg';
import logoEnzymeSvg from '../images/logos/logo-enzyme-airbnb.svg';
import logoJestSvg from '../images/logos/logo-jest.svg';
import logoEslintSvg from '../images/logos/logo-eslint.svg';

const SKILLS = [
  { id: 'react', logo: logoReactSvg, label: 'React' },
  { id: 'redux', logo: logoReduxSvg, label: 'Redux' },
  { id: 'angular', logo: logoAngularSvg, label: 'Angularjs' },
  { id: 'node', logo: logoNodeSvg, label: 'Nodejs' },
  { id: 'webpack', logo: logoWebpackSvg, label: 'Webpack' },
  { id: 'grunt', logo: logoGruntSvg, label: 'Grunt' },
  { id: 'git', logo: logoGitSvg, label: 'Git' },
  { id: 'linux', logo: logoLinuxSvg, label: 'Linux' },
  { id: 'enzyme', logo: logoEnzymeSvg, label: 'Enzyme' },
  { id: 'jest', logo: logoJestSvg, label: 'Jest' },
  { id: 'eslint', logo: logoEslintSvg, label: 'Eslint' },
  { id: 'jquery', logo: logoJquerySvg, label: 'Jquery' },
  { id: 'html5', logo: logoHtml5Svg, label: 'HTML5' },
  { id: 'css3', logo: logoCss3Svg, label: 'CSS3' },
  { id: 'sass', logo: logoSassSvg, label: 'SASS' },
];


const LANGUAGES = [{
  id: 'chinese',
  color: 'white',
  background: '#E06666',
  name: '中文',
  msg: '你好，世界！',
},
{
  id: 'english',
  color: '#073763',
  background: 'white',
  name: 'English',
  msg: 'Hello world !',
},
{
  id: 'french',
  color: 'white',
  background: '#3D85C6',
  name: 'Français',
  msg: 'Bonjour le monde !',
}];

const HOBBIES = [
  'Manger',
  'Dormir',
  'Parler',
  'Réfléchir',
  'Voyage',
  'Sports',
  'Karaoké',
  'Cuisine',
];

export { SKILLS, LANGUAGES, HOBBIES };
