<?php

return [

    'accepted' => ':attribute талбарыг зөвшөөрөх шаардлагатай.',
    'accepted_if' => ':other нь :value үед :attribute талбарыг зөвшөөрөх шаардлагатай.',
    'active_url' => ':attribute талбар хүчинтэй URL байх ёстой.',
    'after' => ':attribute талбар :date-ээс хойшхи огноо байх ёстой.',
    'after_or_equal' => ':attribute талбар :date-ээс хойш эсвэл тэнцүү огноо байх ёстой.',
    'alpha' => ':attribute талбар зөвхөн үсэг агуулна.',
    'alpha_dash' => ':attribute талбар зөвхөн үсэг, тоо, зураас (_) агуулна.',
    'alpha_num' => ':attribute талбар зөвхөн үсэг болон тоо агуулна.',
    'any_of' => ':attribute талбар буруу байна.',
    'array' => ':attribute талбар массив байх ёстой.',
    'ascii' => ':attribute талбар ASCII тэмдэгтүүд агуулна.',
    'before' => ':attribute талбар :date-ээс өмнөх огноо байх ёстой.',
    'before_or_equal' => ':attribute талбар :date-ээс өмнөх эсвэл тэнцүү огноо байх ёстой.',

    'between' => [
        'array' => ':attribute талбар :min-ээс :max хүртэл элементтэй байх ёстой.',
        'file' => ':attribute файл :min-ээс :max KB байх ёстой.',
        'numeric' => ':attribute :min-ээс :max хооронд байх ёстой.',
        'string' => ':attribute :min-ээс :max тэмдэгттэй байх ёстой.',
    ],

    'boolean' => ':attribute үнэн эсвэл худал байх ёстой.',
    'can' => ':attribute зөвшөөрөгдөөгүй утгатай байна.',
    'confirmed' => ':attribute баталгаажуулалт таарахгүй байна.',
    'contains' => ':attribute шаардлагатай утга дутуу байна.',
    'current_password' => 'Нууц үг буруу байна.',
    'date' => ':attribute зөв огноо биш байна.',
    'date_equals' => ':attribute нь :date-тэй тэнцүү огноо байх ёстой.',
    'date_format' => ':attribute нь :format форматтай байх ёстой.',
    'decimal' => ':attribute нь :decimal оронтой байх ёстой.',
    'declined' => ':attribute татгалзсан байх ёстой.',
    'declined_if' => ':other нь :value үед :attribute татгалзсан байх ёстой.',
    'different' => ':attribute болон :other өөр байх ёстой.',
    'digits' => ':attribute :digits оронтой тоо байх ёстой.',
    'digits_between' => ':attribute :min-ээс :max оронтой байх ёстой.',
    'dimensions' => ':attribute зургийн хэмжээ буруу байна.',
    'distinct' => ':attribute давхардсан утгатай байна.',
    'doesnt_contain' => ':attribute дараах утгыг агуулж болохгүй: :values.',
    'doesnt_end_with' => ':attribute дараах утгуудаар төгсөхгүй байх ёстой: :values.',
    'doesnt_start_with' => ':attribute дараах утгуудаар эхлэхгүй байх ёстой: :values.',
    'email' => ':attribute нь зөв имэйл хаяг байх ёстой.',
    'ends_with' => ':attribute дараах утгуудаар төгсөх ёстой: :values.',
    'enum' => ':attribute буруу сонголт байна.',
    'exists' => ':attribute системд олдсонгүй.',
    'extensions' => ':attribute файл дараах өргөтгөлтэй байна: :values.',
    'file' => ':attribute файл байх ёстой.',
    'filled' => ':attribute утгатай байх ёстой.',

    'gt' => [
        'array' => ':attribute нь :value-ээс олон элементтэй байх ёстой.',
        'file' => ':attribute файл :value KB-ээс их байх ёстой.',
        'numeric' => ':attribute нь :value-ээс их байх ёстой.',
        'string' => ':attribute нь :value тэмдэгтээс их байх ёстой.',
    ],

    'gte' => [
        'array' => ':attribute нь :value эсвэл түүнээс олон элементтэй байх ёстой.',
        'file' => ':attribute файл :value KB-ээс их эсвэл тэнцүү байх ёстой.',
        'numeric' => ':attribute :value-ээс их эсвэл тэнцүү байх ёстой.',
        'string' => ':attribute :value тэмдэгтээс их эсвэл тэнцүү байх ёстой.',
    ],

    'hex_color' => ':attribute буруу hexadecimal өнгө байна.',
    'image' => ':attribute зураг файл байх ёстой.',
    'in' => ':attribute буруу утгатай байна.',
    'in_array' => ':attribute нь :other-д байх ёстой.',
    'integer' => ':attribute бүхэл тоо байх ёстой.',
    'ip' => ':attribute зөв IP хаяг биш.',
    'ipv4' => ':attribute зөв IPv4 хаяг биш.',
    'ipv6' => ':attribute зөв IPv6 хаяг биш.',
    'json' => ':attribute зөв JSON формат биш.',
    'lowercase' => ':attribute жижиг үсгээр бичигдэх ёстой.',

    'max' => [
        'array' => ':attribute :max-аас их элементтэй байж болохгүй.',
        'file' => ':attribute файл :max KB-ээс их байж болохгүй.',
        'numeric' => ':attribute :max-аас их байж болохгүй.',
        'string' => ':attribute :max тэмдэгтээс их байж болохгүй.',
    ],

    'min' => [
        'array' => ':attribute дор хаяж :min элементтэй байх ёстой.',
        'file' => ':attribute файл дор хаяж :min KB байх ёстой.',
        'numeric' => ':attribute дор хаяж :min байх ёстой.',
        'string' => ':attribute дор хаяж :min тэмдэгттэй байх ёстой.',
    ],

    'numeric' => ':attribute тоо байх ёстой.',
    'required' => ':attribute талбарыг бөглөнө үү.',
    'same' => ':attribute нь :other-той ижил байх ёстой.',
    'string' => ':attribute тэмдэгт мөр байх ёстой.',
    'unique' => ':attribute аль хэдийн бүртгэгдсэн байна.',
    'uploaded' => ':attribute файл илгээхэд алдаа гарлаа.',
    'url' => ':attribute зөв URL хаяг биш.',
    'uuid' => ':attribute зөв UUID биш.',

    'attributes' => [
        'email' => 'Имэйл',
        'password' => 'Нууц үг',
        'name' => 'Нэр',
    ],

];
