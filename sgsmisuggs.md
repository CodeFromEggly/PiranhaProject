# Suggestions for extra features/safeguards

## Features 

### Sudoswap Trading
    Check for sudoswap liquidity pairs

    Compare marketplace profits to sudoswap pool profits

    Auto sell to sudoswap pool?

### Initial Testing (Riskless)
    Profitable listing is spotted:

        Timestamp when spotted, note price, profits, tax etc

        If/when purchased by someone else, timestamp and report back tx hash, gas used, time taken to purchase

        Could we have bought it in time?

### What's Minting
    Track high volume mints and send push notifications for 'hyped' collections

    Easy bot activation for that collection, i.e.
        Turn bot on?
        Amount of ETH to risk
        If collection pumps and dies, stop tracking somehow

        Also report bot's ETH/WETH balances 


### Regular Profit/Loss Reports
    Depends on frequency of fatfinger listings
    Every 4-24 hours send email with total P&L, recent P&L etc

## Safeguards

### Cut Losses
    If collection starts dumping and we can't exit at the best WETH offer:
    Allow for a % loss and exit if collection passes loss margin

### Offer Validation
    Check offerer's WETH balance

    Check offerer's WETH permissions (if possible)

    Check blockchain for any pending transactions on the offer 

### Marked as suspicious?
**If buying from an alternate marketplace**

    Is item flagged as suspicious on OpenSea?

        Yes:

            Confirm valid offer on x2y2, looksrare etc or viable profit margin (50%+ below floor price for quick flipping, must not be high risk)

        No :

            Continue as normal
