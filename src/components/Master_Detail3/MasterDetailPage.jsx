import React from "react";
import classnames from "classnames";
import styles from "./masterdetail.module.css";

export default function MasterDetailPage(props) {
  const {
    longDescription,
    title,
    status,
    shipTo,
    orderTotal,
    orderDate
  } = props.textSampleData;
  return (
    <div className="col">
      <div className={classnames("row", styles.heading)}>
        <div className="col">
          <h3 className="ml-3 mb-4">{title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white mb-0">
              <li className="breadcrumb-item">
                <a className={styles.breadCrumbLink} href="/Master_Detail3">
                  Master_Detail3
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-8 col-12 ml-3 mb-5">
          <button class="btn btn-rounded btn-info">Create New Schedule</button>
        </div>
      </div>
    </div>
  );
}
