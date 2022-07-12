import { BiChevronRight } from 'react-icons/bi';

const BreadCrumb = ({ location }) => {
  const splitLoaction = location.pathname.split('/');

  const one = splitLoaction[1];
  const two = splitLoaction[2].split('-').join(' ');
  return (
    <div className="flex items-center mb-3">
      <span className="text-lg ">Dweller</span> <BiChevronRight />{' '}
      <span className="font-semibold text-base text-appcolor-900">{two}</span>
    </div>
  );
};

export default BreadCrumb;
