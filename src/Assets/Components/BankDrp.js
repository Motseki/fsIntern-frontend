import Select from "react-select";
// import "bootstrap/dist/css/bootstrap.css";

const BankDrp = () => {
  const options = [
    { value: "Access Bank", label: "Access Bank" },
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "NGN", label: "NGN" },
  ];

  return (
    // <div className="custom_select">
       <Select options={options} 
        placeholder='Select Bank'
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            // borderColor: state.isFocused ? 'grey' : 'red',
            padding: 0, paddingLeft: 10, borderRadius: 30,
            display:'flex', cursor:'pointer', flexDirection:'row',
            
          }),
        }}
      

        classNames={{
          control: (state) =>
            state.isFocused ? 'custom_select' : 'custom_select',
        }}
        />
    // </div>
       

  );
};

export default BankDrp;