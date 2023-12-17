package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCancelSellOrder{}

func NewMsgCancelSellOrder(creator string, port string, channel string, amountDenom string, priceDenom string, orderId int32) *MsgCancelSellOrder {
	return &MsgCancelSellOrder{
		Creator:     creator,
		Port:        port,
		Channel:     channel,
		AmountDenom: amountDenom,
		PriceDenom:  priceDenom,
		OrderId:     orderId,
	}
}

func (msg *MsgCancelSellOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
