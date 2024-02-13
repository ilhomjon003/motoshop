/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { type ChangeEvent, useEffect, useState } from "react";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { StyledPostAd } from "./style";
import { useAppSelector } from "hooks";
import { IServerError } from "interfaces";
import { IGearAd, IMotoAd } from "interfaces/forms";
import {
  adTypes,
  bikeColors,
  bikeTypes,
  condition,
  gearSizes,
  helmetBrands,
} from "constants";
import { useUploadAdMutation } from "services/ad";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Spinner } from "components/Loader";
import { StyledInput } from "components/Input/style";
import { Button, RadioButton } from "components/Button";
import { InputFile, InputSelect } from "components/Input/CustomInput";

const PostAd = () => {
  const navigate = useNavigate();
  const [selectedAdType, setSelectedAdType] = useState<string>("moto");
  const [fileList, setFileList] = useState<string[]>([]);
  const [uploadAd, { data, isLoading, error }] = useUploadAdMutation();
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [adForm, setAdForm] = useState<IMotoAd | IGearAd>({
    title: "",
    description: "",
    price: "",
    location: "",
    images: fileList,
    category: "",
    owner: userId!,
    engineSize: "",
    mileage: "",
    manufacturedAt: "",
    color: "",
    size: "",
    brand: "",
    condition: "",
    adType: selectedAdType,
  });
  useEffect(() => {
    setAdForm({
      ...adForm,
      images: fileList,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAdForm({
      ...adForm,
      [name]: value,
    });
  };
  const onSelectChange = (fieldName: string, value: any) => {
    setAdForm({
      ...adForm,
      [fieldName]: value,
    });
  };

  const onDateChange: DatePickerProps["onChange"] = (_, dateString) => {
    setAdForm({
      ...adForm,
      manufacturedAt: dateString,
    });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadAd(adForm);
    if ("ad" in data!) {
      toast.success(data.message);
      navigate("/");
    }
  };
  useEffect(() => {
    if (data) console.log(data);
  }, [data]);
  useEffect(() => {
    if (error) {
      const { status, data } = error as IServerError;
      if (status === "FETCH_ERROR") {
        console.log(data);
        console.log(data);
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
      if (data?.message) {
        console.log(data);
        toast.error(data?.message);
      }
    }
  }, [error]);

  const onChange = (e: RadioChangeEvent) => {
    setSelectedAdType(e.target.value);
    setAdForm({
      ...adForm,
      adType: e.target.value,
    });
  };
  return (
    <StyledPostAd>
      {isLoading && (
        <Spinner isLoading={isLoading} loadingText="E'lon joylanmoqda" />
      )}
      <Text size="xl" bold={600} className="ad__title">
        E'lon joylashtirish
      </Text>
      <br />

      <Form className="post__form" autoComplete="off" onFinish={handleSubmit}>
        <div>
          <div className="flex">
            <StyledInput>
              <label className="inp__label">E&apos;lon turini tanlang</label>
              <RadioButton chilren={adTypes} onChange={onChange} />
            </StyledInput>
          </div>
          <Input
            id="title"
            name="title"
            label="E'longa nom bering"
            placeholder="Masalan Yamaha R6"
            value={adForm.title}
            onChange={onInputChange}
          />
          <InputFile fileList={fileList} setFileList={setFileList} />
          <small>Maksimalk 10 tagacha rasm joylash mumkin</small>
          <StyledInput>
            <label className="inp__label" htmlFor="moto-info-description">
              Izoh
            </label>
            <textarea
              name="description"
              id="moto-info-description"
              cols={76}
              rows={10}
              minLength={40}
              placeholder="E'longa tushunarli va batafsil tarif bering"
              value={adForm.description}
              onChange={onInputChange}
            ></textarea>
          </StyledInput>
          <Input
            id="price"
            name="price"
            type="number"
            label="Narxi(so'm)"
            value={adForm.price}
            onChange={onInputChange}
          />
          <Input
            id="moto-localtion"
            name="location"
            label="Manzil"
            value={adForm.location}
            onChange={onInputChange}
          />
        </div>
        <div>
          <InputSelect
            id="ad-color"
            name="color"
            label="Rangini tanlang"
            value={adForm.color}
            onChange={(e: any) => onSelectChange("color", e)}
            options={bikeColors}
          />
          {selectedAdType === "moto" && (
            <>
              <InputSelect
                id="moto-type"
                name="category"
                label="Turini tanlang"
                placeholder="Masalan sportbike"
                className="inp__select"
                value={(adForm as IMotoAd)?.category || ""}
                onChange={(e: any) => onSelectChange("category", e)}
                options={bikeTypes}
              />
              <Input
                id="moto-cc"
                name="engineSize"
                label="Dvigatel hajmi"
                placeholder="Masalan 600 cm³"
                type="number"
                min={0}
                value={(adForm as IMotoAd)?.engineSize || ""}
                onChange={onInputChange}
              />
              <Input
                id="moto-mileage"
                name="mileage"
                label="Bosgan yo'li"
                placeholder="0 km"
                minLength={0}
                min={0}
                type="number"
                value={(adForm as IMotoAd)?.mileage || ""}
                onChange={onInputChange}
              />
              <StyledInput>
                <label className="inp__label">Ishlab chiqarilgan sana</label>
                <DatePicker
                  className="date__input"
                  onChange={onDateChange}
                  picker="year"
                  disabledDate={(current) => current.year() > 2024}
                />
              </StyledInput>
            </>
          )}
          {selectedAdType === "helmet" ? (
            <>
              <InputSelect
                id="helmet-size"
                name="size"
                label="O'lchami"
                value={(adForm as IGearAd)?.size}
                onChange={(e: any) => onSelectChange("size", e)}
                options={gearSizes}
              />
              <InputSelect
                id="condition"
                name="condition"
                label="Holati"
                value={(adForm as IGearAd)?.condition}
                onChange={(e: any) => onSelectChange("condition", e)}
                options={condition}
              />
              <InputSelect
                id="brand"
                name="brand"
                label="Brand"
                value={(adForm as IGearAd)?.brand}
                onChange={(e: any) => onSelectChange("brand", e)}
                options={helmetBrands}
              />
            </>
          ) : selectedAdType === "gear" ? (
            <h1>accessories</h1>
          ) : null}
        </div>
        <Button type="submit" className="ad__btn">
          E&apos;lonni joylash
        </Button>
      </Form>
    </StyledPostAd>
  );
};
export default PostAd;
