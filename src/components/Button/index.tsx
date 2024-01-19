import { IButton, IRadioBtn } from "interfaces/components";
import StyledButton, { StyledRadioBtn } from "./style";
import { Radio } from "antd";

export const Button = ({ type, children, className, onClick }: IButton) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      type={type ?? "button"}
    >
      {children}
    </StyledButton>
  );
};
export const RadioButton = ({ btnStyle, chilren, onChange }: IRadioBtn) => {
  return (
    <StyledRadioBtn>
      <Radio.Group
        onChange={onChange}
        buttonStyle={btnStyle ?? "outline"}
        defaultValue={chilren[0].value}
      >
        {chilren.map(({ label, value }) => (
          <Radio.Button value={value} key={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </StyledRadioBtn>
  );
};
