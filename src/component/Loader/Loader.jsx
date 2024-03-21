import { Grid } from 'react-loader-spinner';
import { LoaderContent, LoaderStyled } from './Loader.styled';

const Loader = () => {
	return (
		<LoaderStyled>
			<LoaderContent>
		<Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
				/>
				</LoaderContent>
			</LoaderStyled>)
};

export default Loader;