package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendBuyOrder{}

func NewMsgSendBuyOrder(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	amountDenom string,
	amount int32,
	priceDenom string,
	price int32,
) *MsgSendBuyOrder {
	return &MsgSendBuyOrder{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		AmountDenom:      amountDenom,
		Amount:           amount,
		PriceDenom:       priceDenom,
		Price:            price,
	}
}

func (msg *MsgSendBuyOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
