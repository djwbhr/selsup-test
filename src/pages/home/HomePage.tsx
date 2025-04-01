import { useState } from "react";
interface Props {
  params: Param[];
  model: Model;
}
interface Param {
  id: number;
  name: string;
  type: `string`;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Color {
  name: string;
  hex: string;
}

const ParamInput = ({
  param,
  value,
  onChange,
}: {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}) => {
  switch (param.type) {
    case "string":
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    default:
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
};

const ModelEditor = (props: Props) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    props.model.paramValues
  );

  const handleChange = (paramId: number, newValue: string) => {
    setParamValues((prevValues) =>
      prevValues.map((pv) =>
        pv.paramId === paramId ? { ...pv, value: newValue } : pv
      )
    );
  };

  const getModel = (): Model => {
    return { ...props.model, paramValues };
  };

  return (
    <>
      {props.params.map((param) => {
        const paramValue = paramValues.find((p) => p.paramId === param.id);
        return (
          <div key={param.id} style={{ marginBottom: "10px" }}>
            <label>
              {param.name}:{" "}
              <ParamInput
                param={param}
                value={paramValue?.value || ""}
                onChange={(newValue) => handleChange(param.id, newValue)}
              />
            </label>
          </div>
        );
      })}
      <button onClick={() => console.log(getModel())}>Получить Model</button>
    </>
  );
};
const initialModel: Model = {
  paramValues: [
    { paramId: 0, value: "Товар 1" },
    { paramId: 1, value: "333" },
  ],
  colors: [{ name: "Красный", hex: "#FF0000" }],
};

const initialParams: Param[] = [
  { id: 0, name: "Название", type: "string" },
  { id: 1, name: "Цена", type: "string" },
];

export const HomePage = () => (
  <ModelEditor params={initialParams} model={initialModel} />
);
