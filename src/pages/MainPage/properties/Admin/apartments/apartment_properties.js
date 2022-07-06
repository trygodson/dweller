import SingleProperty from '../../../../../shared/components/myproperties/SingleProperty';
const Home2 =
  'https://images.unsplash.com/photo-1653279846919-9df3e223a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDAxNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU4OTg2NTk&ixlib=rb-1.2.1&q=80&w=1080';
const Home3 =
  'https://images.unsplash.com/photo-1653279846919-9df3e223a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDAxNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU4OTg2NTk&ixlib=rb-1.2.1&q=80&w=1080';
const Home4 =
  'https://images.unsplash.com/photo-1655471958761-4500334c440a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDAxNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU4OTgzMDM&ixlib=rb-1.2.1&q=80&w=1080';
const Home5 =
  'https://images.unsplash.com/photo-1591152195629-f814373d9920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDAxNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTU4OTg2NTk&ixlib=rb-1.2.1&q=80&w=1080';

const ApartmentProperties = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home5}
        />
      </div>
      <div className="col-span-1">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home2}
        />
      </div>
      <div className="col-span-1">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home3}
        />
      </div>
      <div className="col-span-1">
        <SingleProperty
          propertyName={'5 Bedroom flat'}
          propertyLocation={'Holy Trinity Junction, Ondo city'}
          propertyPrice={'$8000'}
          propertyDuration={'3 Year Lease required'}
          propertyAvaliablity={'avaliable'}
          noLease={'3'}
          propertyImage={Home4}
        />
      </div>
    </div>
  );
};

export default ApartmentProperties;
