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

const EXPERIENCES = [{
  id: 'famoco',
  startDate: '2018-10-01',
  endDate: undefined,
  title: 'Développeur front chez FAMOCO',
  description: 'Le développement de nouvelles fonctionnalités et la maintenance',
}, {
  id: 'webcentric',
  startDate: '2015-10-01',
  endDate: '2018-09-01',
  title: 'Développeur front chez WEBCENTRIC',
  description:
    'Conception et Création de diverse types de webapp selon besoins du client \n'
    + 'RH, gestion de programmation, systèmes de control d\'accès de festival ...\n'
    + 'Conception de l\'architecture du front\n'
    + 'React, Redux, AngularJS, Jquery, nodejs, Webpack, Grunt, Symfony, antd',
}, {
  id: 'cnrs',
  startDate: '2014-04-01',
  endDate: '2015-09-01',
  title: 'Ingénieur d’étude à l’Institut d’Astrophysique Spatiale (IAS), laboratoire spatial du CNRS',
  description:
    'Création des portails web pour la mise à disposition de données des projets spatiaux\n'
    + 'Extjs, Jquery, python, CSS3, HTML, postgresSQL, Java\n',
}, {
  id: 'orange',
  startDate: '2013-04-01',
  endDate: '2013-08-01',
  title: 'Stage de fin d’étude chez Orange Labs',
  description:
    'Mise en place d’un outil pour la description des réseaux de synchronisation\n'
    + 'HTML, CSS3, Jquery, PHP, WAMP\n',
}];

export {
  SKILLS,
  LANGUAGES,
  HOBBIES,
  EXPERIENCES,
};
