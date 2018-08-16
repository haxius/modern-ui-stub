import React from "react";
import {
  CameraIcon,
  AccountOffIcon,
  CartOutlineIcon,
  WalletTravelIcon
} from "mdi-react";

import SummaryCard from "../common/SummaryCard";

import {
  View,
  CardGroup,
  Card,
  SimpleBarChart,
  StackedAreaChart,
  BoundsProvider,
  Table
} from "../ui";

const chartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "June", uv: 2780, pv: 3908, amt: 2000 },
  { name: "July", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Aug", uv: 2390, pv: 3800, amt: 2500 }
];

const orderData = {
  head: ["name", "date", "amount"],
  rows: [
    ["John Doe", "8/15/18", "$900.00"],
    ["Jane Go", "8/15/18", "$750.00"],
    ["Terry Choo", "8/15/18", "$345.00"],
    ["Jim Martz", "8/14/18", "$667.00"],
    ["Gerald Pace", "8/14/18", "$1,890.00"],
    ["Courtney Wall", "8/13/18", "$67.00"],
    ["Tom Thumb", "8/12/18", "$900.00"],
    ["Dwight Kuhn", "8/11/18", "$750.00"],
    ["Rick Berman", "8/11/18", "$1,890.00"],
    ["Jenna Fischer", "8/11/18", "$67.00"]
  ]
};

const custData = {
  head: ["name", "state/province", "country", "sales"],
  rows: [
    ["John Doe", "Texas", "USA", "$1,438"],
    ["Jane Go", "Pennyslvania", "USA", "$750.00"],
    ["Terry Choo", "Wales", "UK", "$1,345.00"],
    ["Jim Martz", "Victoria", "AU", "$967.00"],
    ["Gerald Pace", "South AU", "AU", "$1,890.00"],
    ["Courtney Wall", "Putrajaya", "MA", "$123.00"],
    ["Tom Thumb", "Berry", "FR", "$900.00"],
    ["Dwight Kuhn", "Alabama", "USA", "$750.00"],
    ["Cheryll Teigs", "California", "USA", "$345.00"],
    ["Ricky Schultz", "Washington", "USA", "$667.00"]
  ]
};

export default () => (
  <View>
    <CardGroup columns={[1, 2, 4]}>
      <SummaryCard
        gradient={["#00A5A8", "#4DCBCD"]}
        mdi={<CameraIcon size="48" />}
        title="Products"
        value="28"
      />
      <SummaryCard
        gradient={["#FF6275", "#FF9EAC"]}
        mdi={<AccountOffIcon size="48" />}
        title="New Users"
        value="1,238"
      />
      <SummaryCard
        gradient={["#FF976A", "#FFC2A4"]}
        mdi={<CartOutlineIcon size="48" />}
        title="New Orders"
        value="4,658"
      />
      <SummaryCard
        gradient={["#10C888", "#5CE0B8"]}
        mdi={<WalletTravelIcon size="48" />}
        title="Total Profit"
        value="5.6M"
      />
    </CardGroup>

    <CardGroup custom={1} flexWrap={["wrap", "wrap", "nowrap"]}>
      <Card width={[1, 1, 2 / 3]} title="Product Sales">
        <BoundsProvider aspectRatio="16 7.5" relative={true}>
          <StackedAreaChart data={chartData} absolute={true} />
        </BoundsProvider>
      </Card>
      <Card width={[1, 1, 1 / 3]} title="Recent Orders">
        <BoundsProvider aspectRatio="22850 25197" relative={true}>
          <SimpleBarChart data={chartData} absolute={true} />
        </BoundsProvider>
      </Card>
    </CardGroup>
    <CardGroup columns="1">
      <Card width={1} title="Recent Sales">
        <Table data={orderData} />
      </Card>
    </CardGroup>
    <CardGroup columns="1">
      <Card width={1} title="Recent Customers">
        <Table data={custData} />
      </Card>
    </CardGroup>
  </View>
);
