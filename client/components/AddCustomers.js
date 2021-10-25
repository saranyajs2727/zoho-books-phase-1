import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "bootstrap/dist/css/bootstrap.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import Items from "../services/Customers";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import * as React from "react";
import ReactPlayer from "react-player";
export default function Estimates() {
  const customHandleClick = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    let data = {
      primary: e.target.elements.primary.value,
      first_name: e.target.elements.first_name.value,
      customer_type: e.target.elements.customer_type.value,
      last_name: e.target.elements.last_name.value,
      customer_email: e.target.elements.customer_email.value,
      work_phone: e.target.elements.work_phone.value,
      website: e.target.elements.website.value,
      mobile: e.target.elements.mobile.value,
    };
    console.log(data);
    // let res = await Items.addCustomers(data);
    // console.log(res);
  };
  return (
    <div>
      <div style={{ float: "right", marginLeft: "20px" }}>
        <div className="navba">
          <a
            href="#"
            data-ember-action=""
            data-ember-action-2133="2133"
            className="blubs"
          >
            <EmojiObjectsTwoToneIcon
              color="primary"
              style={{ marginLeft: "110px" }}
            />{" "}
            Page Tips{" "}
          </a>
        </div>
        <hr />

        <div className="row zb-txn-form">
          <div className="col-lg-8">
            <form onSubmit={customHandleClick}>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-lg-3 pt-0">
                    <span
                      id="ember548"
                      className="tooltip-container text-dashed-underline ember-view"
                    >
                      {" "}
                      Customer Type{" "}
                    </span>
                  </legend>
                  <div className="col-lg-9">
                    <div className="form-check form-check-inline">
                      <input
                        name="customer_type"
                        id="a1e525b29"
                        className="ember-view form-check-input"
                        type="radio"
                        value="business"
                      />
                      <label className="form-check-label" htmlFor="a1e525b29">
                        Business
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        name="customer_type"
                        id="a0ee5a8ca"
                        className="ember-view form-check-input"
                        type="radio"
                        value="individual"
                      />
                      <label className="form-check-label" htmlFor="a0ee5a8ca">
                        Individual
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  <span
                    id="ember551"
                    className="tooltip-container text-dashed-underline ember-view"
                  >
                    {" "}
                    Primary Contact{" "}
                  </span>
                </label>
                <div className="inline-fields col-lg-8">
                  <div className="row">
                    <div className="col-lg-4">
                      <div id="ember552" className="type-ahead ember-view">
                        <div
                          id="ember553"
                          className="dropdown show ac-dropdown ember-view"
                        >
                          <div
                            className="auto-select ac-selected"
                            tabIndex="-1"
                          >
                            <div
                              className="ember-text-field form-control ac-search-txt ember-view"
                              placeholder="Salutation"
                            >
                              {/* <select className="value" name="unit"  > */}
                              {/* <select className="value" name="unit" >  */}
                              {/* <input autocomplete="off" spellcheck="false" placeholder="Salutation" autocorrect="off" autocapitalize="off" id="ember554" className="ember-text-field form-control ac-search-txt ember-view" type="text">  */}
                              <select
                                className="box"
                                name="primary"
                                required
                                style={{
                                  padding: "5px 49px 0px 20px",
                                  marginLeft: "-12px",
                                  marginTop: "-20px",
                                }}
                              >
                                {/* <input placeholder="Salutation" type="text" /> */}
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss.">Miss.</option>
                                <option value="Dr.">Dr.</option>
                              </select>
                            </div>
                            {/* </select>   */}
                            {/* <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                
                              > 
                                 <select className="value" name="unit" >
                                 
                                </select> 
                              </div>  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="First Name"
                        name="first_name"
                        autoFocus=""
                        id="ember555"
                        className="ember-text-field ember-view form-control"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-4">
                      <input
                        placeholder="Last Name"
                        name="last_name"
                        id="ember556"
                        className="ember-text-field ember-view form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  {" "}
                  Company Name{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group ">
                <label className="required col-form-label col-lg-3">
                  Customer Display
                  <br /> Name
                </label>

                <div className="col-lg-6">
                  <div id="ember558" className="type-ahead ember-view">
                    <div
                      id="ember559"
                      className="dropdown show ac-dropdown ember-view"
                    >
                      <div className="auto-select ac-selected" tabIndex="-1">
                        <div
                          className="ember-text-field form-control ac-search-txt ember-view"
                          style={{ display: "flex" }}
                        >
                          <select
                            className="value"
                            name="unit"
                            style={{ paddingRight: "287px", float: "flex-end" }}
                          ></select>
                          <HelpOutlineOutlinedIcon
                            color="disabled"
                            style={{ marginLeft: "20px" }}
                          />
                        </div>

                        {/* <input autocomplete="off" spellcheck="false" placeholder="" autocorrect="off" autocapitalize="off" id="ember560" className="ember-text-field form-control ac-search-txt ember-view" type="text"
     />  */}
                      </div>
                    </div>
                  </div>
                </div>
                <span id="ember561" className="popover-container ember-view">
                  <div
                    id="ember563"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3 ">
                  Customer Email
                </label>
                <div
                  className="col-lg-6"
                  style={{ display: "flex", width: "55%" }}
                >
                  <input
                    name="customer_email"
                    id="ember564"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                  <InfoOutlinedIcon
                    color="disabled"
                    style={{ marginLeft: "20px" }}
                  />
                </div>
                <span id="ember565" className="popover-container ember-view">
                  <div
                    id="ember567"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">
                  Customer Phone
                </label>
                <div className="col-lg-3" style={{ paddingRight: "8px" }}>
                  <input
                    placeholder="Work Phone"
                    name="work_phone"
                    id="ember568"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
                <div
                  className="col-lg-3"
                  style={{ paddingRight: "8px", display: "flex", width: "30%" }}
                >
                  <input
                    placeholder="Mobile"
                    name="mobile"
                    id="ember569"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                  <InfoOutlinedIcon
                    color="disabled"
                    style={{ marginLeft: "20px" }}
                  />
                </div>
                <span id="ember570" className="popover-container ember-view">
                  <div
                    id="ember572"
                    className="d-none popover bs-popover-right ember-view display-name-help"
                  ></div>
                </span>
                <div className="form-control-plaintext col-lg-3 font-xs">
                  <a
                    href="#"
                    data-ember-action=""
                    data-ember-action-573="573"
                    style={{ textDecoration: "none", marginLeft: "12px" }}
                  >
                    Add more details.
                  </a>
                </div>
              </div>
              <div className="row form-group">
                <label className="col-form-label col-lg-3">Website</label>
                <div className="col-lg-6">
                  <input
                    name="website"
                    id="ember574"
                    className="ember-text-field ember-view form-control"
                    type="text"
                  />
                </div>
              </div>
              <button
                id="ember1447"
                className="btn btn-primary ember-view"
                type="submit"
              >
                {/* 
            <Link href="/addItem">
              <a onClick={customHandleClick}>Save </a>
            </Link> */}
                Save
              </button>
              <Link href="/customer">
                <button
                  id="ember1447"
                  className="btn btn-primary ember-view"
                  type="submit" style={{marginLeft:"10px"}}
                >
               
                    <a >Go back </a>
                  
                  
                </button>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}