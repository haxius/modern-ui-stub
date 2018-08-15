import React from "react";
import {
  CameraIcon,
  AccountOffIcon,
  CartOutlineIcon,
  WalletTravelIcon
} from "mdi-react";

import SummaryCard from "../common/SummaryCard";
import { View, CardGroup } from "../ui";

export default () => (
  <View>
    <CardGroup columns={[1, 2, 3, 4]}>
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
  </View>
);
