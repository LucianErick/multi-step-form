import * as C from "./styles";

type Props = {
  title: string;
  description: string;
  selected: boolean;
  icon: string; // TODO: mudar depois
  onClick: () => void;
};

export const Select = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  return (
    <C.Container selected={selected} onClick={onClick}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};
