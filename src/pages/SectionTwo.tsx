import { Check } from 'lucide-react'

const features = [
    "Agabka Beeraleyda",
    "Dhirta iyo Abuurka Tayada Sare",
    "Maareynta Cayayaanka iyo Bacriminta"
]

function AgricultureForm() {
    return (
        <section className="py-16 px-6 mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                            <span className="text-[#eebd4f] font-medium">ADEEGYADEENA</span>
                            <h2 className="text-5xl text-[#325E56]  font-extrabold  mt-2">
                                Beeraha & Waxsoosaarka Dabiiciga ah
                            </h2>
                        </div>
                        <p className="text-gray-600 max-w-lg">
                            Waxaan bixinaa adeegyo tayo sare leh oo ku saleysan waxsoosaarka beeraha, si aan uga caawino bulshada in ay helaan waxsoosaar joogto ah oo dabiici ah. Waxaan ku dadaaleynaa inaan fududeyno hababka beereed si casri ah oo waxtar leh.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image Grid */}
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="col-span-2">
                            <img
                                src="https://img.freepik.com/premium-photo/organic-fertilizer-is-being-applied-vibrant-vegetable-crops-showcasing-care-effort-sustainable-farming-practices-lush-green-plants-thrive-rich-soil-highlighting-importance-nurturing_908344-60014.jpg?w=900"
                                alt="Planting seedlings"
                                className="w-full h-60 object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUUEhMWFhUXGB4bFxgYGRgXHhoYGBcYFxgYGBgYHSggGBolHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysmICYtLS4tLS01LS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIALwBDAMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAEBQYDAgcBAAj/xABBEAACAQIFAgUCBAMGBQMFAQABAhEAAwQFEiExQVEGEyJhcTKBQpGhsRTB0SNSYuHw8QcVcoLCM5KiJENTsuIW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAMhEAAgIBAwMCAwgABwAAAAAAAAECEQMSITEEQVETImFxgTJCkaGxwdHwBRQjM1Lh8f/aAAwDAQACEQMRAD8A5OHEj4ojC2p347flXV+0wMEEHbp+1bWBBAryUz2wnBWyR9/z2porAigrMgEg+9bW7kETwaqSOg8SNwD/AK4FO8kQxqGynZf60sweG81pb6AZH+Ijp8bEVWYGztPTp8dP0j8qpjhbshmyqqQNmmVC5b2+sDb39jXkPiDBgOdCkMDv3n3Fe51K+Msg8wG/aH9oo9S/3gO3+L96ObF96JLDl+7I8Rx6XBuZr9hMao2O5qgxlsXkMD1dP6VKXsA9tvUpFLjkpqmWmnF2gq7jgpkCsXxxet8PlL3VJA2FLzaKEgiqRUXxyJJzXPA1y0Etuae+ckaaVZTYDrJMUeuFCnbes+Smy8LSCMBgv7TV2H6tt+00vxDFrrOeCdvgbL+gFN7l3y7BY8wT/wC46F/r96QWJc7VnxXKcpvtt/Jnx1LLKX0X05/MwtYkK5p5lubhPw7UDZyEs4kwKq7GSJpECYq+SUGaYRkuTLD3wXtsv98fzqks3b1yC0CktzDBHsADl5/L/eqAXiOBWXF9uX0/Qzwp5Z/T9Am1bitJpRdxrA7itLWPnoa0akX0MObfiszZPeuUc1p50UbTBTRwqletdpiaCxt+ssPeDcUL3DptDN8Qwrl8SSKGbEgc1mb68zXNgSOjdk770JiMjt3DqIFZm8OhrfD4+BSWUrwJ8f4VUS1v0t7f0pamYOh0PsfinOIzdrhITY+9d2cvW4pN2NVGUgcEtisexaDuPisHuyZk/amT5OFJ59qF/wCVuelMnE5qRf59ibdxVCRqXqO3UUlUATPNZj0nUePzr7cQkBxw32pLbdjxSiqDDcgA1rZt6zt9Ime5iNht8n7UPh7erboOveBx81SZTgg0HhR0H7D253nrFaIKyGWekYZdhpAPC9hwT7f4etN1rBTXYatcVRhk7NHaK7FYLsJP+9d25if0phSB8f5A9sHEYVdp/tFA466gP3qFGYatroFe9bEEHccV5F488LnCP/EWlLWSdwPwHsf8PY/as2TCuUa8Od8NipMXcj+xtbfEUVhssN5ZuWtNdZR4psEQRpPvTrGeIbFu3qJB7Cs+hr4Gl5F8yCzq2+FaBOk1zazsBZNA+Is4bEvsIHQUswOCdrttSNmdQfgsJ/Sa0+mtNyMsszTengtvEOLVbQD7FiNv+hYP6kUjwOdIhO1MvEmWviHSPwqT92b/APmpPG5e9poYVm6KEJYVfLt/mSwyyRgpVzv+I/8A+bCS2rfoKf2fEhw5S26ln0y/+EtuF+QImpPI8FpLYi4PRa3A/vXD9C/z+w71plNi7iLhM+p29TdpO5+AP2q0oRv4IdZZSlXg9HwuL8+9ZciBo1fnuP3FUCrPFStpm1gopgmPhVEAft/7ao8PiwIHWvP6d2nLyxulTcXPy2zc4Kea/fwi1qL81oQK00jRbBzbPSu1s1r8VjfvEEbUaQtsyvYCTWK5dBkUctwmumZorqQdTEWNyl7hgMVHWKJwvh8KkFifvWjm4D7UDir2JA9G/wA0mw+7GdrJlAoDE5YQ206a/ZZjMQTDqAKoLADc0VFMDlKPIhTLx0G/xXeFwEElpqgVV4FCY5DBgVzgluKp2IMTl0kngUNaG3Q1rmKX4IG/xUdicZjEYqEJpVC+CjlS3KfLMTauMB9X+vammLw+oiTpRRP36Cl3grCBVa4w0hdhP61Q2sP5xhZjmf5nuf2ir44bEMk9wTJ8vZ2nhR1G3uN+/v71WW0CgACAOlfbGHCqFHArorWqMaRlnPUznXWiGsbgr5aemEDhxWgNYoa7DUwDsRxXy9aVlKsAVIgg9Qa+DkGu5rjjw3xZ4cW1jGQL6SNS/BnY++xpdfy211bjpXuuaZfbv22S4NiOeoPQg9CK8txv/DfHb6Llp+0llJHQ8Hesssc72exthmhp3W4gw+UoRKR961ymyovgHeFY/EKQP1Ir8fB+Z2zHksf+llI/escjwV5L103lZSEiGBBlmB6/9BrP1CcMcm32Fz5UsTcV2Dcfi7YdlLaSoH6jV/5Vmj2byw/qbgdTP2pJ4isq119J31b/AG2/lRnhG0FuGf8A7al2PaOPy3P/AG0I41DCn3SQYZXjxpNbJBniDD27VtbOqFUkn/Ex6/66RXXhRwUcqsCdIPcn6o+0D/uqczPHHENxuTsB7nYDv2qruAYXDhV3YDSI6u27N+5+wqXVaoYlj+9J/wDrM2aTUVCPMtv5HeCzVFGld45P771hiM1M6ghgdqkEe7ZMqZVulHJ4ia2N0BFUWFxSUeD0IOMIpcUUSeLlUgFDVRk+cJeHaoPAqmJYMv3qs/5doUaNjRugyimOcSTPpr5eIIg80BhbTkQxom3hv7xo3YtUfsLigPSaPVwRS+3Y0mea4vF/w7VydAavgKxt0Luayt4hWGxBqfzOxfvDSWgVp4eyNrRnzCe4NBOwqLS3GOJzBUIB2o21j16UPmGTi7v1FC2rRtbMOOtG2jqTG2FxILe9aYvGKOSBWFkq24qd8T5bcux5bEUW9hVFNlBbxKMdmBrR8IDvAqQ8PeGLtpy5uEz0qpNxxtFdaDTFOZ3x6bCdCNUR9Uj01Q5YDaUA7k7sf5fap3wnZGkXX5PE8+7fNUbnarw8kMj7Dm1cBFdkUksXyh246im+GvhhtV4ysztUfnWsilFstYOtM0A6tmtgKDa4BRVtweK5HGk96Fu4g6gB14rLGYkcA7fvWJaB6mhjxPT2oPcKDHxIUhW2B4P8qINzik+EusTBdLg/UUY7bxBHYj+YNFAYeD71H/8AEEycOg5Zj/4gf/tVQquPxKfkR+1SvieWxuDUgbEHb/rB/wDGsvWq8LXmv1RLL9mhB4r/AOGpGq7hGJO5Ntt5PXS38jUhhsK1jB3jcBW5cbRBEED6Yj48z9K97uXalXyS1jkvG6Prc+Ww5UKNII/WlzL3Rgu7/Jb/AK0aJO6T/tf1HknhTABr2uNrYn/uOyj9z/20fmuMD4gWyYS3yf8AEYJ/IQPzp1bwK4NXQsG0sdTdCZgfyH51OLpDGDqZiSfkmawwl63USyPiOy/dnYI+plc+y2RRLhLbQZ26GpjxBhWQwokUVau3IIaVA4FdYvFu1uIkitUE4yPRnUonzwvduW2BiFq7/wCbFh6d4rzXA5g92bbbGqzJbq2LfMnrXZU09wY6a2Gv/wDokUwxg04y3MBc60htZUmK9RFNMtyYWvpNIgySHJIr4SKBv3HHSa+27urmRTaiek2vWJ4pVmDHDwykmeRRNzEaTFBY7Dm5zxSNopFPufrHixJggzTS/jrb25JFS9/LR2/SssVlxK7Eiu19gvGuUUOXkBSQ0imOFuKfmoC3ZuWyCrnT1qjwOJg9a66A4lDriuSxPSsLFzVHc0Z/AP0YU6JNpci1rqEbEKRXGCzEPweDE9KjMfmLyIBJP257mu0xd0HQCB124oRk0O8aZ6H5o710l2N15qLyHE39ZFwgr0NVGHvjjrV45EzPLE4j/CY8NseaMgVPmOlb2sey7Grqfkg4eBo9kHkUvx2PVJAMAbs3Tbn/ADrPE5tPoU/9R7e3zUF4u8QoZt6otDkDm4ew7L+9dKaGx4nJlZgc8svLeYsfhEjb3+9d3s7wnW6jE8BTqJ+AK8ot3LmI2QaLY4Ubbf4jTXLiloxbAa51bovxUnl09jVHpdXfb5HqeXYm26nQAOkdR2kURYu6fS24HHt7V57gsyey+rUT3HcdqrcNndu6u31RweRVYZU0QzYHBjLFZktvcnapPF483MwtN0VdvyY/zrDNMz3gkQp3jv0FLsBidV4Pzsf2isHWZW9MfihcmGowb7yRdY/MD5TEcxA+TsK4xOM/hsKFA9UaV+SNz9tzS1LutkEcHUR8cVxmTtiL6W+xj+bH8v2rNn6lpylHnaK+b3f7E+odOWn5L59xj4WyVGsM11Q3m7Qwn0/fud/sK818Z5McBiJVfQ+6N+6n3r2zD29ChRwNgPYUq8WZEmNsG22zA6kPZh/LpXpYunjjxKK7fn5OwP0/afz9exLl9RaZpkcQ7ISF3Xg1l4hw3lNpKwVMH5Ffkxwa15aiHNc90mkbFs2mwM2GuEOp0nr0pvlN5y3kOJnhqHy7B6QVdorjEYzyoFs7j8VCT1e1BitPuZ6HkE2QVmacW5YatUDtXk+Dz+8jTrk9jXonhvNVvWwTseoqMoSjyOpKXA9BWOZrHzRPSt1boFrLEYcDpQAZ6YkxNEW7II4rlZiu1mK5I5swxGH9tqGu4YEbVSWERhFCX0RNjzRmkt2S9dIkv4Mh/Y9DTnC4VI32obNrxkFRx0r5Yxcnfb2qfBoTclZviCyn0CaFN/Ekk69PttRd64IAU12l4RuN67uK4p8oh8DgrhfSeOtP7eWKPU3H3k00TAqjEgEk9elK80vXUbUNOmD+fSjuOn4Gl7Drasm9tA59hQOGzOzeOm3dXbmpvMvEN3yvJujUG+sDbbsKXZTikt+uxagknUDJIHSqadrJ273Lp8xNvf6kBjV1B+KyzHPgiGD6j1/ujuaTeV549TeUTvzEn4pZn2EX6mchRtHMnvRjPsCWNcgWaeIrrjyrLELPqfv7A/vSm3ZtodV1i7dqFe80wCI7iisGtsGW9Rq72R2NJv8AtBq4q5d9KjRbHQbUyw19bQ25pVdx5OyiBW2BwpYyx2FQkvJri/G40a5qZPes8zzry39AlgIBBIj8q7AChnPEQKmbjanJJ5roK2DLKlXkLt4m4YLElZ3neJ6+9VOTXkT1iXUIYjeZIH71EXM00kLv9qpsivnyZTaSo+xuif0BqfVQaUZPz/J5vU5YrRvxJMt7GNZSHVOf/iAP60Z4fw5Llz8A+55pVaxZZSu2kEb9zG89oqpyQKUXRBAH79a87oovNmTfC3fzl/CM0Hral43+rCcXfZEPq4H7UL4bz9MRbnhhyKLzWzNpwOdJ/avOcizUK6OgKgHS3uDt+hr3Zz0M1Y8SnFvuAf8AFLLwcWGHDr+o/wBCoJbLLcEdK9f8dZe1xPNWDoG46x1ivN8NlD3W1IpM0mPJV2O4KVVyKcY91jO9c4ZiPrMCqc5FfZRAIjn/AHoR/C1517x0p1lhVAeKV2hQVMyu4qoyDHXbIGiGBO47UJgvDGJCxp2p3b8Lvb0XFk/3oqWWcWqKY4tblNl2aX9UqUYEcdQaYI15zLgD43pVhMrAIYkg0dqvIRpIZPesyLSSvYNRoME7V+N7eBX44xQJfYGs/MtMJRqcmc3c2KQNM/FafWwZpnsaRXM1W24Dj4ah7Hi9UZhchl/CQN/ipuLkyWbH3RXYq2hErAjmlHlAtqofEeIFu218tIPX4rTLcWrelpmllqc/gJH1Z8Ol+YecKGiN60FkdqIw2EgSDzX1sGehq2lmjUSWJzy9b2f1Adh+lIMTjnvEahyfSoPA961ybMzdOl0Os8tMBQeNq0e1YUlA5Yk7xudvjpXcbMbZ7o+eRb3e/tOyKDJrc5vbs2wLdkBpjUYII+eppTfwSJcQkG4zfSgO/tNMsJgiWKhETr6pbSewB4ptjuRXjM0xhHnXEHlFoBAG3aOv3o/BYnEXELlUdQJIJEx/WmOGypLzaJLDryF1cHbgV9ynJrWEvag3qJK6J1D5ouUWuBaafJI46350AeWmmeOs70pFvQdxJr0LPvDSG6boX1xsvAk9ZqTzDLL9tgvlktzI3FUhNcC13OMJYJ3bYdqaJiLYgFgPYb1O3lvcXCV/St8G6J01GllC/wDo0Qy+F+I3zC6XXSg2pDjrGkUztYnehs/0mFHYn70cdqVAzU4tiXM7iSvliBH61V5BiYw4gc7D51GP3qRxWCZVXUwlhIHtV34Rylv4RbjA/wBm7GO6gTP5zXdYrw7bnjdTGTXAbm2M8mwLakB2Eb9vxH78fehMo8R4iyoVHEDhTuI7DqKlTjv4q+WdtIOy+yjgVWZblNkbm6DWbBg/y8Kf2nu/mb+jwr06LLL/ABC5Yl1ZkYACN4232qLzV3XEuiMPK1DSBt9UGD7inWW4tS2m2dh1rDMMsJxqsBKmGP2FO8l7M0yxKH2R5euC4+iTJAB7GKJwuGVOig8RQ6ZKzSyNBrLCZAWjVdcsreoE0iTfYGy7jW3atsGAb5FdYXBQJUChLuC8tpVo3/1NEjGEQAVB670yruK77HT4U7gDT2odMXoEXIntXYzObulQWMTA6fPYV9vuNX9oqz7Vz+ByvuYX7qmI4Nc3ME4ACEkHua6whDN6ZgdCCN+etNmYAKTt8UErC3WwqbByIczFZpgkj6Tt2pkLh9RifmuQjAA9DRoGpk/mWDVhupPbagsNkdvV6l/Oqq9jLYOgkTXOkRIhp+K6g2L8Lgba/SsUZ/DLPQe9a4dtoIiv1y2r9a6gNhWEeZ3461zdzC2pgsPzrBU0iJ2NRvii+i3oBP0j9zTW+wqim9yaznOLt06Aq88oOnQUbkGW3I1rc0OdpI+kfi5p4b4QBEtoQsepYBkd5ovLsRack3mUENGgGfbeueTakhtG9sSZbg7AfWt9i6nZzxPcVtfzRlukIFKwfMuuNQHc7RvTK9Ys6j5KAAAkx+IAfkBU3ZF3aHVUYwFECSd4Ncne51UF4vOZUixdgrEqFA1fapu5m95nYSZIiBtHx2qluZKt25cNr0gQABuZA3JI7nrXGCcWbqqgFsn6mZdWqeQJ/eni4rZKxZKT3FmYeIb9qwLRILHlpJMfJrC14kxHlKusQdp6x80yzjLFuW2fUNZaSGEHSOq9AKyTLEsoLjEXNPECRJ4nuKdShXG4jUr5EQDPIJJ6iTPzFZK/lnegsRjGF3WI5mBsB7RTTEeXcQMp9XUVaSrngTHO+OR3lq23XUImlt2ybhZugMCsMJbKIWB52qhyjDf2ZEbkfrWf7LbRu/3Ek0Qj4iTDCY/SvV/Al3VlrgGTpuD85ry7OLAW8495/PeqrwFn3lI+H0k+YTv0UEQTWrJHVC4nktPVpIxE0XNLbQYp1h7JLALt711n+Ow2k2bGH0ureq87FmaO3aa/ZTd1pwduT2FDI3pstgrVpKHJm0OFX7mqZ784hZja2p/+RB/l+dTeEYKvoH3Pet2xY8+yqtJ0lW+TuP1ryc9tNr+0a+plpxN+CnzTG3LY8xPSI3jf9KSWM+KOty4GdHPqKndT/wBIqdzfOHS46Kx1SI7AdRBoFcZiR6zMT7bn4rVDG3FNiRyxa2PR8xu3bdxTaZbli9DAsd1+O9ZYXKg11muN7jf9qSZIxxOBueeP/Rua1jbbk8fJpJmHicqIta5nkmfaABU8cJy9vdHRyqm2U2a5n5bacK4RyIdzvCz1FYtntwPoZ2J51BeQBv32+Kjsfj7hElNM/U8EFusE1pgseQN2I0nYg7gHkVb0XQVlWor08Rtq9J1oeonYjv1/SnuXeI1hdakCY3MlTzv7VCBLt5WYMVYCVVRE9mgcGBWuUZyjJ5d3ldyW5knePYdqm4NK0U1J7M9ZYBiBqEETWWOxnk23kSFFR/hHEJfdtz6DA3j09BHaiv8AiTc04IwTOpeJ4n2opO6JNJAF2wlx1bWNRJIdNxAB1CAefmnGT3l2VTvpkfHQ/FeY5DjFtspiR+KBuJPI7gdqvcpVQWKMWWeAQY2mPYGkyQcGWhJTiVeHuB1kiCDBnvX29aUgzHyKTeQxIuKWgwHtnbb+8PcUzvYUmDb+4op2ibjTFTG7JRDI7n/alOPy/EM8jRx1qoxeFa6v9k4Q8ccGubVkqqrcKlgNz39646yJtaAZCl0USTIG560rxwDNDf2a8s2+/tVQrJZEm4o9MaVAYN1BpXfwd+6BcdA679QBBO8fajFhluctglQIMPfLC4BKmYWeST2+a+DBDU2vS5U9CIB7k99uKaXMKtsKokSAYUTpX5PNcY+zhzbtBnJS2STpUSxJmJHzXarOqkDYDEBbYZWJdrkaegB51/4aAzS49khn0FyZG5HpnYjtROOtOUHlXFVdjHD7mACBuT/SpzN8T5rHfWRyDtsNtiP2p4RtiydI1xGeMzencdQeI+KAxGZONSoxCHof9bUM7ImnSDzuTz/tX66AG1Df2IrRGEV2ISk33BDgLjI1wKdC/UeOfnmssISTA+a3xuYXHAVmJA4XgD4AofCkg/NaN63M6rUUmEQsQPwr+9VWAuS6gD0jmpbKgVjfmmlzG+W7BeimPmKwTu6R68JUtyTz28GxFw8jVH5GKww2Ia22oAgGv1y+rLv9UzNbLfUoOJHSvRiqSR47m9WoExNwudUfNbZTfKvHQ81vh2iDtA+P50Lj2Abb9K6StUBSerUUd/FFVIU7Rua++EsRN+Dvq3E8gjtU2uJ2MnmnXg99WIT2mKwdTj04J/JlsuXUn8gvxhfC4gqLYkidXWlFq4xMhjudh/lTzxlZXzyw3aOPajPD+SWjbm4QSd5BPp24MbClw5IxwRb8DYISkl8gjwDck4i2xnVb3HTrU/gsuLN6FkjbUx21dNI61V+EcqW1fdrZ1WysTIPqkyNqmzcZPNOth5bsdEET6o+01OE7yT0/D9AwVZJKXwAc3xbW28l/VHJBkknvWvh/w+2IVnZ9Kq06Sp9QET6hsv3okY/zGD+VbNyRp9JYgnqw/FAquy/xCtlID6+Vd9BPqBJgTAgTt7VeWRxjSW5VY1J23sKMyyh7Sq9kmzt9OrWpj6hq6d9+9KToLI6Kukj1IRyDywPfmKurua3XUq6h7RAgmBGoc7cGfnmonN/C9ywxe2NdsnZVklZEiBJJEzUsck3TZWaaVpFb4W8M27FwXEcsGGwJ3g0d44waNYYSSdQGmfcGoTw74idLyK5IHWRGke3tXWb5hduzd31SRbIAjsSepMUzjLVuInFq0c/8vRBL3FBHAUEwCDyeJqgyE21VGbVrVtOoSZEErMdNzUijmF9W8EbDeed5p94YxbkXRMwNW556EAdP5UuSLq2PBq6RYhnnWtwlRsRA5k7jrxzTvCYk6f39jUn/ABTszoUZdIUrqK7k7FZG20T96PtO1xHUsQxHpPH2FQTplJRtB2IzIK2lBMn1f1pa1okkk9e54qHxOHxS3ibbsXU777R70Tazq8g0tak9w01VwvhoRSrlHPiNGFwC1C25gECJYd+vB+KMykXk0/U3o0iJMKNye1FXwravNUpsCurf6T16gmPvXFu9dVU9YK7xCnSNUydu23Nc5bUBR3sZYi2EBDaxIB3kksRsF2gfyoSzaU6gZTafUYBg/lWZxkg/2dy+4AAO+gFjA1cb8UeLrvaRHChlaCATB3IIkLA79aShrEVzI/NYsL6KwMlhuSCduuxHSkSeH21v/aKNM8bkgH8Q6D3q0XKwNj5YZgYXfjcHeBJ35FcvhDItMVZlGnUTpIBIhdvqkx+RqkcslshHji92S+b+Hgir9RuKNydwwbcERxtSu2JkMIj+XSvRBh7qWmeVM+n1bkRsACJIjfakubYEXlZFVEu2ySBuC4b3PJpo5XwxXjXKIDE2iCe1DMYNWd3wo3loLl1EZzsGB+qPpk8mkV/w7iRM29x0DLJ9wJ3HvWyGWL7mSeKS4QNhsW0RO1F4jG6QTO5FaYTwxeuCUdI4MmIIAJHvzz0pllmUWlBYqcQ4IBGklVJ2+mRrB23mKWUsdjxWWqojpr9VTjruLtSEW0UE/wDp2rbAAch4UxE96Ew2YWnVziMLbMRDW5sn9Nj+VXU01aMzi06YhojyptFp4aI+RzXzEWhqOgkryO8djRmX4BnUg7DUJJB294G9FySVnKLb2F1q2Sdqp/BmH/8AqVPYH86GtZOqzqbUyndACCQKqPC2CtC5rSQxXdT+ETtJ7153+IZ0unnXgfJiccbbFvibzDiHCqPVAB2/LelmBxzYfVZvJKPuwnf2KkUw8UItzEOS/wBO2kQN/k+29TV60TuZ2pulinhin4RSLcYpo9O8JYi0wBt/9w1M0Ge5pLnV/WxVmhdUhtSz9RHrB/Dt0/WvngJNFi7dbYSfyVaj/NZrhubtvO/+dQw4lLNkp8UDHnvJJ14RX4K4bYSYFsH1KANLaxALGd5AneicTcIV9CeYfTrUlSNttSLsxAnkb7DnmpPCYwsQNcQTCuSQAxGywDBn86KS8yn0kEggmPTHHB5E7VaWJ3ua45VWxUC02lUWUYf3d4BB0lgdnEFTAO0+xpjld9yB540XASutVgFV4DdTv8c/elmVZrabZEOtZhQJiTJZWG/xG9OWxlt/S6mQfSzKSJg7mRO38+nFZ3a2aLqnuhT4k8LHE+XdsXFd0EOCd24jfp7TzPNS9nFulwWnVrbDkONME78HgGqu5mz2SdZUmSGOiV33G8CIMgRzt3ipbxNcN7y3KBbjFvUOqiNIOw4gx+fWtGJt+2XBDItPujydhACA/Q8rPI4P2oq1jGt3xcvAaWkalGkEE7kRx0NTXqJEzJ9+aMt3tSkERHcztPY1WWPyTjk8HoeIZG0KV1EySUPb0zHXpQueWm0DyixOkQomfQ3P2pd4RxWttO5a2sKCYBQkT+RA/OnFzD/VOpLqA6HmQdZ4AGxG24rC46ZUzWnqQrxl+xrR8TcuW1vLBC/hZdiTG8Guj4ew7+rDXm8o8ajvPXmgs9whu3ERk49W3XodPtVHkuVKloAIe5+apqqCp7iVc3fAPmi2BeK6WJEzLRq9RURJ33+e9fTjrYPlruYBUAfiB4nsB370NibTuEZSztGldQnaOjH0gRIidqBwVlr7QLcOPqKgKDpliABERH30mhSZ1tFEcUfLJ9Pa4o3IEg6jA23PNLXxjWl0hCskklmYae6kagADvse55rm4QpRriuFcgSokMpIBJgmR6eOfass3llhhpQmA5WBswIckkwwIHJ6x1gdFHNmNq9BG0Ed+GDSdQIO247dedqcZRindvSNlBMgDUBG5AO8j5oYLaNsujtduKAXIBAKgQCvAAB56896BxBcBriFQNi/MDkAEMJidtprtNsN7FPYwrG2WUllHOs6Q2mTLaSeOn3mubV23B8zTMAwYgxspkmWXip583K6WJ9O0quwbnSNidpY9OOa78R4lv4dEVCqtJVW3PoJUaAPUvBBkdulcoWwOVIPzrDzb80XAgRgSBDAk7CAOB+29L0VXUeSSGMgld/blhOkdoH3pDhMU7+lrpUiQLcsB0E7kkGRxtX3DW0eGuu6XFmXUgMDqYQpj1TzNPopbiqVjPFZei22i3LSNREj1bzoYE7HrtxXzCM4GpTbRCoITWD6p9PBJH3NdNdaVW87C2SCpuFwwYCIOkAbgRppRj8NbtLc0O9y6RBEArBkHjeYYbzGxHxy92zOft3Hl7DwQwV7dwjUfK9SsJglguxj2rvF4aw1u4ri0TpLkDUGJAGykLOocFQIqdy7FJ5aKDcneFn6ySY9KxxxH+jph8CxXSSyhWBYKuoye+4kwTsJ+9HRT3Z2u1shvbye69sW19CCCq6ADH+JuSf8AUUtOXXbZGoMFn6Ymd46b1TLaw91CF1L6QF0kKyuDO2pWj5FfLRvEK9sjQBDJd3kgTIZeekxNJ6ku42iPYU4jLVUhmY20Ybn1SJ6SBuZp9kNkQWA5idweOp32JG9D4i411TtBhZEsVVonUoOxG45I4NH5Fo0SqqJY6ipmSOSdhBnpWDr5P0a+KRn63bE/iSXiLAu7uwCaA34hBYjs3WhMJ4fa4oYuoXsOT7DoP8qc51Yt4i4zC6FB2hRKyNgedyfbqeKByDE25S0oZ5bTvAEauY7gA/516MZOOP29h9EY/a4odYjL/JwD20O5WBq23c9fevPLmHhRuCZ37iOm1ek+K8Si2SrNEyY52BAmOTEz9qh7GX2fqDlp3A23PSeiip9BN6HN93ZjwQ1R1Lu2xVhbmnVpG4MzzxR+IvFwDqEdhtBPQTxx+lB4sckJpEwYBgHtNZebp7id/wDavScdW46lp2CRdI3B36/671S5X4rZdIuA3ORJ4J5Ukdx3H69ZXWG+a7tXoUq0+39P50k8aktxoZHF7HoxZb1uFhCYkABgB6hAA3AnsBwOm9SPiqw9nyo1Km4iIXWv4oP49LdRx+geW5ldF0aAXJEaTy0jjbijPEOGvMsOoUl9wDKgqu0Gez7kzxzzWeEfTyJNrctkyqcKXIk83kgn/XUdq+2brAEjn8x9xXy3giAWILICASvQmicRljgAqCAQSJMyB3jrWpuPBnSlyFWMwKlH+ggc6RvIiD3Bpzk/iAvhnRzJUysHf4I7c7jvUvawbNuDJEbAH9BFUuDyS2Wl2VGdBCnmDtOx9NQyxhW5fHKbexXZFZAW01yzrcEhdRAIJkjc9IrMZW8tqxhtEsToBBCyZgGmGVysCHurtDyCBvAUSZYe9M8baLEHW6nSAQLdsgEcwSKzFmee4lG3CksCRADERGkkAd+vTj2rfAeJVaIS2FEAqVMzxOobxMff5rXM/wD0UIMF9to9InSApIldiR96mMowiPe0sNpJgGPpPG3T9e0VSMU4tsWUmpUj0nybbAsr27o0lmUQDuABtEb7ADr32iub+AF/0smkQNJgadag7gHncAkGeBFY4PLrdudAIKlCpkyuonYewIkTO5NCnHXQ12ybrsFEqzH1AqxgyPgVL4jfA+5dZVYtve3Zyu2qXYgjyn6H5Bn3785kEW3et+VpRUKlxbIKsrwrTuTuQeeYo7LMxLPe9CAogIYAzOhHMme9w/YCiMe5vW31wY9hv6iRM/AplJJ7gab4IZcH/DgE3ZKNNttPmKxKa40g7dQT/OsXvtq16tU6mbQ0QHmQOwk8DiDVgmCV2uKxYhWJEmdySOs+3vtQ+SWh5xtwNPMQvOsy0RAJovIFQJLB4Au0uj6mBIfnn8R6/imZ6V+xuRqrHQx1SumfoY8bMDPI3kduK9DweTWjh2+oS+8Ej8ZHI3iCduN6QYLMiyoxt2/7RxbYQY0lATAJ2Y9/am9SXKF0R4ZL4bB4hgAUYrq0sRwHJ0hC54Y7bdBWli3fs34ZRpgqy/SQPVpknqD1B3gVVeIbkWthA1ltILBZVU6T1DEHrWWdYBFwt3FCQ4CCPwwWVODv9O3NFZNW1cg06d74JfzSpa2Bc9J3UW5AeNcKRJjYme3Tmt8izu+G8q3bF2dwpG4H9352O1bZdml1WIVtlRbiz6iGJWYLSY3PPc1t/wASTDWb6+m4wYMVkTp0kT7+o0VUnpa5A20tSfAJm1xbkGzYu23DTuSAjnlQOI9z2ra4b4S3/EB2VjNsq8h+sOQSZ2HQHmmmDtC9h7F25OsrBIJWeNyRuTUfmpNt2VCQFYxueQYn59/euh7vb4On7fd5HWY5yGgcKNhB3BExIOzD/aqrw9vhtXMhjxE881DeGbQv3NN3cBHeeDKjbcdK9By8aMKdO0I8cmIJjc15/wDiMUlCC/5L9zN1E3OKvyjzrMLwWNLauoTY+o7kEDn/ACpr4Ryi6t7zLkKFWQm2oM+wJA4680ryu0qXrjgSUVmWZ+qTvt1q5yJtVtbhjU/qaNhOkdOlaOuyvHhaj32/E7qn/pOX0JXPGF/GsCCy2l0gAhRP4mJPQE8dayzXDWNI0XSb7dBqgkCexj/XzSPE4xyztq3JaY+9E5cvo1SQwTUGHIIbTse0dK1QxenCKvhJDYajDQkEWydBBZSqxMrBZ43AYAggSSCea4xIDuoWIg8mfvJ6HvXy1i281l6aCe2+mZ25P9TXwYstbtAhfSCAY/vMOQdtugjqeaendlLXAvSyokwRvzOw6R8f5UQ2FbSGMANO43giP6im+Tv5x0vEfUQAACYjccU7xOU2F84rbAi2AOYGpkDECdiQxoSzU6Z0cNxtEvlim0wYhXtHYPpJCt79R+e4q7v4D+JsjVq6ExqUOCJGknhR9RG/EVP4C3rtk/SUfSNO0jVG/cwI+KtfAY8wXQ5JCvCjoBO/9Kx9TjeWSlHaS7i5MdRtELleTYq2L2i0XQgzJWCONhMzuDTPKvCN8Wy2tFYKNCk6gSRuSTspIP51bX7KpcIVYGobSfxBesztO1BYMAmSAZD9P/xkKo/ShLqJN0lv/ANb4iS1rDXbLi3cKqwIJiWVw/BUjfUOxjvWmCyLz7zXmMFJDI4LAtEKD00kbmjcTjibmJGhPQUI2JmVBgyeOntWmHvuyh9RGq0wKrAHpcgdJmNuadNrc0q2qY9xLPZ0GwyMm2q0kA6fxG2D222mibFxnGoOEB6MskbDmKKynDpdtpqUCOq+ngRO3XakGLxTBiF9I22E8wJPPNHtYFzR/9k="
                                alt="Hands holding seeds"
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Fresh vegetables display"
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgricultureForm