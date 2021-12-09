import * as React from "react";
import { Radio, InputNumber } from "antd";
import Item from "./Item";
import GraphinColorPick from "./ColorPicker";
import { NodeStyle } from "@antv/graphin";

interface LabelSettingProps extends NodeStyleLabel {
  handleChange: (schena: { label: NodeStyleLabel }) => void;
}

export type NodeStyleLabel = Partial<NodeStyle["label"]>;

const positions = ["top", "bottom", "left", "right", "center"];

const LabelSetting: React.FunctionComponent<LabelSettingProps> = (props) => {
  const { handleChange, fill, fontSize, position } = props;

  return (
    <>
      <Item title="Location">
        <Radio.Group
          defaultValue={position}
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => {
            handleChange({
              label: {
                position: e.target.value,
              },
            });
          }}
        >
          {positions.map((item) => {
            return (
              <Radio.Button value={item} key={item}>
                {item}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Item>

      {/* <Item title="内容">
        <Input
          size="small"
          placeholder="输入文本"
          prefix={<FontSizeOutlined />}
          onPressEnter={(e: any) => {
            handleChange({
              label: {
                value: e.target.value,
              },
            });
          }}
        />
      </Item> */}

      <Item title="size">
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={fontSize}
          onChange={(e) => {
            handleChange({
              label: {
                fontSize: Number(e),
              },
            });
          }}
        />
      </Item>
      <Item title="color">
        <GraphinColorPick
          color={fill as string}
          onChange={(val) => {
            handleChange({
              label: {
                fill: val,
              },
            });
          }}
        />
      </Item>
    </>
  );
};

export default LabelSetting;
