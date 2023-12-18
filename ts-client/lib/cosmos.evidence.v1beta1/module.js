// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { GenesisState } from "./types/cosmos/evidence/v1beta1/genesis";
import { QueryEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";
import { QueryEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
import { MsgSubmitEvidence } from "./types/cosmos/evidence/v1beta1/tx";
import { Equivocation } from "./types/cosmos/evidence/v1beta1/evidence";
import { QueryAllEvidenceRequest } from "./types/cosmos/evidence/v1beta1/query";
import { MsgSubmitEvidenceResponse } from "./types/cosmos/evidence/v1beta1/tx";
import { QueryAllEvidenceResponse } from "./types/cosmos/evidence/v1beta1/query";
export { GenesisState, QueryEvidenceRequest, QueryEvidenceResponse, MsgSubmitEvidence, Equivocation, QueryAllEvidenceRequest, MsgSubmitEvidenceResponse, QueryAllEvidenceResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryEvidenceRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryEvidenceRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryEvidenceRequest({ value: QueryEvidenceRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryEvidenceRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryEvidenceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryEvidenceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryEvidenceResponse({ value: QueryEvidenceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryEvidenceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSubmitEvidence({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSubmitEvidence: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSubmitEvidence({ value: MsgSubmitEvidence.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSubmitEvidence: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEquivocation({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEquivocation: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.equivocation({ value: Equivocation.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEquivocation: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllEvidenceRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllEvidenceRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllEvidenceRequest({ value: QueryAllEvidenceRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllEvidenceRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSubmitEvidenceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSubmitEvidenceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSubmitEvidenceResponse({ value: MsgSubmitEvidenceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSubmitEvidenceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAllEvidenceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAllEvidenceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAllEvidenceResponse({ value: QueryAllEvidenceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAllEvidenceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        queryEvidenceRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest", value: QueryEvidenceRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryEvidenceRequest: Could not create message: ' + e.message);
            }
        },
        queryEvidenceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse", value: QueryEvidenceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryEvidenceResponse: Could not create message: ' + e.message);
            }
        },
        msgSubmitEvidence({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence", value: MsgSubmitEvidence.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSubmitEvidence: Could not create message: ' + e.message);
            }
        },
        equivocation({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.Equivocation", value: Equivocation.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Equivocation: Could not create message: ' + e.message);
            }
        },
        queryAllEvidenceRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest", value: QueryAllEvidenceRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllEvidenceRequest: Could not create message: ' + e.message);
            }
        },
        msgSubmitEvidenceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse", value: MsgSubmitEvidenceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSubmitEvidenceResponse: Could not create message: ' + e.message);
            }
        },
        queryAllEvidenceResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse", value: QueryAllEvidenceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAllEvidenceResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosEvidenceV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
