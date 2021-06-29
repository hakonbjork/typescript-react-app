import Color from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

// keyof color gjør at bare red, green eller blue kan brukes
const updateColor = (props: Props, colorId: keyof Color) => (value: number) => {
  props.onColorUpdated({
    ...props.color, //  lager en klone av current props.color objekt
    [colorId]: value, // der en property (farge) får en ny verdi
  });
};

// Kunne laget en slags loop og mappet her, men gadd ikke
const ColorPicker = (props: Props) => (
  <div>
    <ColorSlider
      value={props.color.red}
      onValueUpdated={updateColor(props, "red")}
    />
    <ColorSlider
      value={props.color.green}
      onValueUpdated={updateColor(props, "green")}
    />
    <ColorSlider
      value={props.color.blue}
      onValueUpdated={updateColor(props, "blue")}
    />
  </div>
);

interface PropsColorSlider {
  value: number;
  onValueUpdated: (newValue: number) => void;
}

const ColorSlider = (props: PropsColorSlider) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={(event) => props.onValueUpdated(+event.target.value)}
      />
      {props.value}
    </div>
  );
};

export default ColorPicker;
