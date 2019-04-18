import React from "react";

var style = {
  margin: "auto"
};

class PaypalButton extends React.Component {
  render() {
    return (
      <div id="ppbutton">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="PS8V3LHMLA6WG" />
          <table style={style}>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Rates" />
                  Rates
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Hour of Coding">
                      Hour of Coding $75.00 USD
                    </option>
                    <option value="Week of Coding">
                      Week of Coding $1,500.00 USD
                    </option>
                    <option value="Month of Coding">
                      Month of Coding $5,000.00 USD
                    </option>
                  </select>{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt="please pay me, omg i just need to make rent"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    );
  }
}

export default PaypalButton;
