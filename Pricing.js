import React from "react";

function Pricing() {
  const data = [
    {
      name: "Free",
      cost: "0",
      user:"single user",
      storage:"5GB",
      project:" Unlimited Public Projects",
       
    },
    {
      name: "Plus",
      cost: "9",
      user:"5 user",
      storage:"50GB",
      project:" Unlimited Public Projects",
    },
    {
      name: "Pro",
      cost: "49",
      user:"unlimited user",
      storage:"150GB",
      project:" Unlimited Public Projects",
    },
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {data.map((list) => {
            return (
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                     {list.name}
                    </h5>
                    <h6 class="card-price text-center">
                      ${list.cost}<span class="period">/month</span>
                    </h6>
                    <hr />
                    <ul class="fa-ul">
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span> {list.name==="Free"? list.user : <b>{list.user}</b>}
                       
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        {list.storage}
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span class="fa-li">
                          <i class="fa fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li class={list.name==="Free"?"text-muted":""} >
                        <span class="fa-li">
                          <i class={list.name==="Free"?"fa fa-times":"fa fa-check"}></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fa fa-times"></i>
                        </span>
                        Dedicated Phone Support
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fa fa-times"></i>
                        </span>
                        Free Subdomain
                      </li>
                      <li class="text-muted">
                        <span class="fa-li">
                          <i class="fa fa-times"></i>
                        </span>
                        Monthly Status Reports
                      </li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
