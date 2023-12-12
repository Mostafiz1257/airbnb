import Container from '../shared/Container';
import { categories } from './CategoriesData'
import CategoryBox from './CategoryBox';
const Categories = () => {
    return (
  <Container>

<div className=' flex flex-row  overflow-x-auto pt-4'>
            {
                categories.map((item, index) => <CategoryBox key={index} item={item}></CategoryBox>)
            }
        </div>
  </Container>
    );
};

export default Categories;