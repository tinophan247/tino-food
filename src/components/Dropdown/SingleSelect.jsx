/* eslint-disable react/prop-types */
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const SingleSelect = ({
  name,
  width = "300px",
  options,
  value = 0,
  onChange,
  required,
}) => {
  return (
    <div className="font-medium mb-5">
      <p className="font-semibold text-xs my-2">{name}</p>
      <Box
        sx={{
          "& .MuiInputBase-root": {
            width: width,
          },
        }}
      >
        <FormControl fullWidth>
          <Select
            value={value}
            onChange={onChange}
            size="small"
            displayEmpty
            renderValue={
              value !== 0 && value !== ""
                ? undefined
                : () => <ul className="text-gray-500">{name}</ul>
            }
            required={required}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 224,
                },
              },
            }}
          >
            {options.length > 0 &&
              options.map((item, index) => (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SingleSelect;
